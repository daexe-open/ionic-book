
exports.config = {

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  specs: ['../test/e2e/kitchen-sink.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 120000
  },

  baseUrl: 'http://localhost:8765',

  chromeOnly: false,

  onPrepare: function() {
    var ionicSnapshot = require('./lib/ionic-snapshot.js');
    ionicSnapshot({
      groupId: 'ionic',
      appId: 'kitchen-sink',
      accessKey: process.env.IONIC_SNAPSHOT_KEY
    });
  }

};

// protractor config/protractor.conf.js --browser chrome --params.width 400 --params.height 800 --params.test_id 123
