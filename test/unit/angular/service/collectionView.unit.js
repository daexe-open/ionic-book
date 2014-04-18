describe('$collectionView service', function() {
  beforeEach(module('ionic'));

  function setup(scrollCtrl, dataSource, itemScrollSize) {
    var mockDataSource = {
      compileItem: jasmine.createSpy('compileItem'),
      getItemAt: jasmine.createSpy('getItemAt'),
      attachItem: jasmine.createSpy('attachItem'),
      detachItem: jasmine.createSpy('detachItem'),
      getData: jasmine.createSpy('getData'),
      getLength: jasmine.createSpy('getLength'),
      dataWatchAction: jasmine.createSpy('dataWatchAction')
    };
    var collView;
    beforeEach(inject(function($collectionView) {
    }));
  }

  describe('constructor', function() {
  });
});

describe('$collectionViewDataSource service', function() {
  beforeEach(module('ionic'));

  function setup(options) {
    var dataSource;
    inject(function($collectionViewDataSource, $rootScope) {
      dataSource = new $collectionViewDataSource(angular.extend({
        scope: $rootScope.$new(),
        expression: 'a in b'
      }, options || {}));
    });
    return dataSource;
  }

  it('should set expression', function() {
    var dataSource = setup({
      expression: 'item in items'
    });
    expect(dataSource.keyExpression).toBe('item');
    expect(dataSource.listExpression).toBe('items');
  });

  it('should set expression with a filter', function() {
    var dataSource = setup({
      expression: 'item in items | filter:expre'
    });
    expect(dataSource.keyExpression).toBe('item');
    expect(dataSource.listExpression).toBe('items');
  });

  it('should set other options', function() {
    var transcludeFn = function() {};
    var transcludeParent = angular.element();
    var dataSource = setup({
      transcludeFn: transcludeFn,
      transcludeParent: transcludeParent
    });
    expect(dataSource.itemCache).toBeTruthy();
    expect(dataSource.transcludeFn).toBe(transcludeFn);
    expect(dataSource.transcludeParent).toBe(transcludeParent);
  });
});
