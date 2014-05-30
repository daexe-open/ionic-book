var _ = require('lodash');
var buildConfig = require('../build.config');
var connect = require('connect');
var cp = require('child_process');
var gutil = require('gulp-util');
var http = require('http');
var karma = require('karma').server;
var uuid = require('node-uuid');

var karmaConf = require('../karma.conf.js');
var karmaSauceConf = require('../karma-sauce.conf.js');

module.exports = function(gulp, argv) {

  /*
   * Connect to Saucelabs
   */
  var sauceInstance;
  gulp.task('sauce-connect', function(done) {
    gutil.log('process.env =', _.pick(process.env, ['SAUCE_USER', 'SAUCE_KEY', 'SAUCE_TUNNEL_ID']));
    require('sauce-connect-launcher')({
      username: process.env.SAUCE_USER,
      accessKey: process.env.SAUCE_KEY,
      tunnelIdentifier: process.env.SAUCE_TUNNEL_ID || 0,
      verbose: true
    }, function(err, instance) {
      if (err) return done('Failed to launch sauce connect!');
      sauceInstance = instance;
      done();
    });
  });

  gulp.task('sauce-disconnect', function(done) {
    sauceInstance && sauceInstance.close(done) || done();
  });


  /*
   * Karma
   */
  gulp.task('karma', function(done) {
    karmaConf.singleRun = true;
    argv.browsers && (karmaConf.browsers = argv.browsers.trim().split(','));
    argv.reporters && (karmaConf.reporters = argv.reporters.trim().split(','));

    karma.start(karmaConf, done);
  });

  gulp.task('karma-watch', function(done) {
    karmaConf.singleRun = false;

    karma.start(karmaConf, done);
  });

  gulp.task('karma-sauce', ['sauce-connect'], function(done) {
    return karma.start(karmaSauceConf, function() {
      sauceDisconnect(done);
    });
  });


  /*
   * Protractor Snapshot Tests
   */
  var connectServer;
  gulp.task('snapshot-server', function() {
    var app = connect().use(connect.static(__dirname + '/../../dist/ionic-demo'));
    connectServer = http.createServer(app).listen(buildConfig.protractorPort);
  });

  gulp.task('snapshot', ['snapshot-server'], function(done) {
    snapshot(done, 'config/protractor.conf.js');
  });

  gulp.task('snapshot-sauce', ['sauce-connect', 'snapshot-server'], function(done) {
    snapshot(done, 'config/protractor-sauce.conf.js');
  });

  var snapshotValues = _.merge({
    browser: 'chrome',
    params: {
      platform_id: 'chrome_local_test',
      width: 400,
      height: 800,
      test_id: uuid.v4()
    }
  }, argv);
  function snapshot(done, configFile) {
    var protractorArgs = [
      '--browser <%= browser %>',
      '--params.platform_id=<%= params.platform_id %>',
      '--params.width=<%= params.width %>',
      '--params.height=<%= params.height %>',
      '--params.test_id=<%= params.test_id %>',
    ].map(function(argument) {
      return _.template(argument, snapshotValues);
    });

    return protractor(done, [configFile].concat(protractorArgs));
  }

  function protractor(done, args) {
    var errored = false;
    var child = cp.spawn('protractor', args, {
      stdio: [process.stdin, process.stdout, 'pipe']
    });

    child.stderr.on('data', function(data) {
      errored = true;
      connectServer.close();
      done('Protractor tests failed. Error:', data.toString());
    });

    child.on('exit', function() {
      if (!errored) {
        connectServer.close();
        done();
      }
    });
  }
};
