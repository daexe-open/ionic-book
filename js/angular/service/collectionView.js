/**
 * Components:
 * - DOM Element
 * - Actual list of items
 * - Each element has a corresponding cache with element, scope, and pointer to its corresponding item value
 */

angular.module('ionic')

.factory('$collectionView', [
  '$rootScope',
function($rootScope) {
  var ITEMS_ON_SCREEN_BUFFER = 1;
  function CollectionView(scrollCtrl, dataSource) {
    this.element = scrollCtrl.$element;
    this.scrollView = scrollCtrl.scrollView;

    if (this.scrollView.options.scrollingX && this.scrollView.options.scrollingY) {
      throw new Error("Cannot create a scrollCollectionView on an element that scrolls both x and y. Choose one, yo!");
    }
    this.isVertical = !!this.scrollView.options.scrollingY;
    this.scrollTransformDelta = 0;
    this.itemScrollSize = 52;
    this.dataSource = dataSource;

    this.renderedItems = [];

    this.scrollView.__$callback = this.scrollView.__callback;
    this.scrollView.__callback = angular.bind(this, this.renderScroll);

    if (this.isVertical) {
      this.scrollView.options.getContentHeight = angular.bind(this, this.getScrollSize);
    } else {
      this.scrollView.options.getContentWidth = angular.bind(this, this.getScrollSize);
    }
    this.scrollView.resize();
  }

  CollectionView.prototype = {
    getScrollSize: function() {
      return this.itemScrollSize * this.dataSource.getLength();
    },
    renderScroll: function(transformLeft, transformTop, zoom) {
      if (this.isVertical) {
        transformTop = this.changeTransformPosition(transformTop);
      } else {
        transformLeft = this.changeTransformPosition(transformLeft);
      }
      return this.scrollView.__$callback(transformLeft, transformTop, zoom);
    },
    changeTransformPosition: function(transformPos) {
      var difference = transformPos - this.scrollTransformDelta;

      if (difference >= this.itemScrollSize && transformPos < this.scrollView.__maxScrollTop) {
        this.setScrollTransformDelta(this.scrollTransformDelta + this.itemScrollSize);

      } else if (difference <= -this.itemScrollSize && transformPos > 0) {
        this.setScrollTransformDelta(this.scrollTransformDelta - this.itemScrollSize);

      } else if (transformPos <= 0) {
        this.setScrollTransformDelta(0);
      }
      return transformPos - this.scrollTransformDelta;
    },
    setScrollTransformDelta: function(delta) {
      var newStartIndex = Math.floor(delta / this.itemScrollSize);

      if (newStartIndex !== this.renderStartIndex) {
        var itemsOnScreen = Math.ceil(this.scrollView.__clientHeight / this.itemScrollSize) + 
          ITEMS_ON_SCREEN_BUFFER;

        this.renderStartIndex = newStartIndex;

        //Detach rid of items that aren't in the new range
        this.renderedItems = this.renderedItems.filter(function(item) {
          if (item.index < this.renderStartIndex || 
              item.index > this.renderStartIndex + itemsOnScreen) {
            this.dataSource.detachItem(item);
            return false;
          }
          return true;
        }, this);

        for (var i = 0; i < itemsOnScreen; i++) {
          if (!this.renderedItems[i] ||
              this.renderedItems[i].index !== this.renderStartIndex + i) {
            this.renderItem(i);
          }
        }
      }

      this.scrollTransformDelta = delta;
    },
    renderItem: function(viewportIndex) {
      var dataIndex = viewportIndex + this.renderStartIndex;
      var item = this.dataSource.getItem(dataIndex);
      this.dataSource.attachItem(item, this.renderedItems[viewportIndex]);
      this.renderedItems.splice(viewportIndex, 0, item);
    }
  };

  return CollectionView;
}])

.factory('$collectionViewDataSource', [
function() {
  function CollectionViewDataSource(options) {
    this.expression = options.expression;
    this.scope = options.scope;
    this.transcludeFn = options.transcludeFn;
    this.transcludeParent = options.transcludeParent;
    this.itemCache = new HashMap();

    var keys = this.expression.split(/\s+in\s+/);
    this.keyExpression = keys[0];
    this.listExpression = keys[1];

    this.scope.$watch(this.listExpression, angular.bind(this, this.dataWatchAction));
    this.dataWatchAction(this.scope.$eval(this.listExpression));
  }
  CollectionViewDataSource.prototype = {
    renderItem: function(value) {
      var element;
      var childScope = this.scope.$new();
      childScope[this.keyExpression] = value;

      this.transcludeFn(childScope, function(clone) {
        element = clone;
      });
      return {
        element: element,
        scope: childScope
      };
    },
    getItem: function(index) {
      var value = this.data[index];
      var item = this.itemCache.get(value);
      if (!item) {
        item = this.renderItem(value);
        this.itemCache.put(value, item);
      }

      item.scope.$index = item.index = index;
      item.scope.$first = (index === 0);
      item.scope.$last = (index === (this.getLength() - 1));
      item.scope.$middle = !(item.scope.$first || item.scope.$last);
      item.scope.$odd = !(item.scope.$even = (index&1) === 0);

      return item;
    },
    attachItem: function(item, beforeItem) {
      if (beforeItem) {
        this.transcludeParent[0].insertBefore(item.element[0], beforeItem.element[0]);
      } else {
        this.transcludeParent.append(item.element);
      }
      reconnectScope(item.scope);
    },
    detachItem: function(item) {
      //Don't .remove(), that will destroy element data
      for (var i = 0; i < item.element.length; i++) {
        var node = item.element[i];
        var parent = node.parentNode;
        parent && parent.removeChild(node);
      }
      //Don't .$destroy(), just stop watchers and events firing
      disconnectScope(item.scope);
    },
    getData: function() {
      return this.data;
    },
    getLength: function() {
      return this.data && this.data.length || 0;
    },
    dataWatchAction: function(newValue, oldValue) {
      this.data = newValue;
    },
  };

  return CollectionViewDataSource;
}])

.directive('scrollCollectionRepeat', [
  '$collectionView',
  '$collectionViewDataSource',
  '$compile',
function($collectionView, $collectionViewDataSource, $compile) {
  return {
    priority: 1000,
    transclude: 'element',
    terminal: true,
    $$tlb: true,
    require: '^$ionicScroll',
    link: function($scope, $element, $attr, scrollCtrl, $transclude) {
      var dataSource = new $collectionViewDataSource({
        expression: $attr.scrollCollectionRepeat,
        scope: $scope,
        transcludeFn: $transclude,
        transcludeParent: $element.parent()
      });
      var collectionView = new $collectionView(scrollCtrl, dataSource);

      $scope.$on('$destroy'); //TODO
    }
  };
}]);

/**
 * Computes a hash of an 'obj'.
 * Hash of a:
 *  string is string
 *  number is number as string
 *  object is either result of calling $$hashKey function on the object or uniquely generated id,
 *         that is also assigned to the $$hashKey property of the object.
 *
 * @param obj
 * @returns {string} hash string such that the same input will have the same hash string.
 *         The resulting string key is in 'type:hashKey' format.
 */
function hashKey(obj) {
  var objType = typeof obj,
      key;

  if (objType == 'object' && obj !== null) {
    if (typeof (key = obj.$$hashKey) == 'function') {
      // must invoke on object to keep the right this
      key = obj.$$hashKey();
    } else if (key === undefined) {
      key = obj.$$hashKey = nextUid();
    }
  } else {
    key = obj;
  }

  return objType + ':' + key;
}

function HashMap(){
}
HashMap.prototype = {
  /**
   * Store key value pair
   * @param key key to store can be any type
   * @param value value to store can be any type
   */
  put: function(key, value) {
    this[hashKey(key)] = value;
  },

  /**
   * @param key
   * @returns the value for the key
   */
  get: function(key) {
    return this[hashKey(key)];
  },

  /**
   * Remove the key/value pair
   * @param key
   */
  remove: function(key) {
    var value = this[key = hashKey(key)];
    delete this[key];
    return value;
  }
};

function disconnectScope(scope) {
  if (scope.$root === scope) {
    return; // we can't disconnect the root node;
  }
  var parent = scope.$parent;
  scope.$$disconnected = true;
  // See Scope.$destroy
  if (parent.$$childHead === scope) {
    parent.$$childHead = scope.$$nextSibling;
  }
  if (parent.$$childTail === scope) {
    parent.$$childTail = scope.$$prevSibling;
  }
  if (scope.$$prevSibling) {
    scope.$$prevSibling.$$nextSibling = scope.$$nextSibling;
  }
  if (scope.$$nextSibling) {
    scope.$$nextSibling.$$prevSibling = scope.$$prevSibling;
  }
  scope.$$nextSibling = scope.$$prevSibling = null;
}
function reconnectScope(scope) {
  if (scope.$root === scope) {
    return; // we can't disconnect the root node;
  }
  if (!scope.$$disconnected) {
    return;
  }
  var parent = scope.$parent;
  scope.$$disconnected = false;
  // See Scope.$new for this logic...
  scope.$$prevSibling = parent.$$scopeTail;
  if (parent.$$scopeHead) {
    parent.$$scopeTail.$$nextSibling = scope;
    parent.$$scopeTail = scope;
  } else {
    parent.$$scopeHead = parent.$$scopeTail = scope;
  }
}
