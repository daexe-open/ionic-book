/**
 * Components:
 * - DOM Element
 * - Actual list of items
 * - Each element has a corresponding cache with element, scope, and pointer to its corresponding item value
 */

angular.module('ionic')

.factory('$collectionView', [
  '$rootScope',
  '$timeout',
function($rootScope, $timeout) {
  var BUFFER_LENGTH = 1;
  function CollectionView(scrollCtrl, dataSource, itemScrollSize) {
    this.element = scrollCtrl.$element;
    this.scrollView = scrollCtrl.scrollView;

    if (this.scrollView.options.scrollingX && this.scrollView.options.scrollingY) {
      throw new Error("Cannot create a scrollCollectionView on an element that scrolls both x and y. Choose one, yo!");
    }
    this.isVertical = !!this.scrollView.options.scrollingY;
    this.dataSource = dataSource;

    this.lastRenderScrollValue = 0;
    this.scrollTransformOffset = 0;
    this.itemScrollSize = itemScrollSize;
    this.renderedItems = [];

    this.bufferStartIndex = this.bufferEndIndex = this.bufferItemsLength = 0;

    this.scrollView.__$callback = this.scrollView.__callback;
    this.scrollView.__callback = angular.bind(this, this.renderScroll);

    if (this.isVertical) {
      this.scrollView.options.getContentHeight = angular.bind(this, this.getContentSize);
      this.getScrollValue = function() {
        return this.scrollView.__scrollTop;
      };
      this.getScrollMaxValue = function() {
        return this.scrollView.__maxScrollTop;
      };
      this.getContainerSize = function() {
        return this.scrollView.__clientHeight;
      };
    } else {
      this.scrollView.options.getContentHeight = angular.bind(this, this.getContentSize);
      this.getScrollValue = function() {
        return this.scrollView.__scrollLeft;
      };
      this.getScrollMaxValue = function() {
        return this.scrollView.__maxScrollLeft;
      };
      this.getContainerSize = function() {
        return this.scrollView.__clientWidth;
      };
    }
    this.scrollView.resize();

    $rootScope.$watchCollection(angular.bind(this, this.dataSource.getData), angular.bind(this, this.render));
  }

  CollectionView.prototype = {
    getContentSize: function() {
      return this.itemScrollSize * this.dataSource.getLength();
    },
    renderScroll: function(transformLeft, transformTop, zoom, wasResize) {
      if (this.isVertical) {
        transformTop = this.getTransformPosition(transformTop);
      } else {
        transformLeft = this.getTransformPosition(transformLeft);
      }
      return this.scrollView.__$callback(transformLeft, transformTop, zoom, wasResize);
    },
    getTransformPosition: function(transformPos) {
      var difference = transformPos - this.lastRenderScrollValue;
      if (Math.abs(difference - this.scrollTransformOffset) >= this.itemScrollSize) {
        var scrollValue = this.getScrollValue();
        if (scrollValue >= 0 && scrollValue <= this.getScrollMaxValue()) {
          this.render();
          return (difference % this.itemScrollSize) + this.scrollTransformOffset;
        }
      }
      return difference;
    },
    render: function() {
      var i;
      var scrollValue = this.getScrollValue();
      var viewportStartIndex = Math.floor(scrollValue / this.itemScrollSize);
      var viewportItemsLength = Math.ceil(this.getContainerSize() / this.itemScrollSize);
      var viewportEndIndex = viewportStartIndex + viewportItemsLength;

      var bufferStartIndex = Math.max(0, viewportStartIndex - BUFFER_LENGTH);
      var bufferEndIndex = Math.min(this.dataSource.getLength(), viewportEndIndex + BUFFER_LENGTH);
      var bufferItemsLength = bufferEndIndex - bufferStartIndex;

      this.scrollTransformOffset = (viewportStartIndex - bufferStartIndex) * this.itemScrollSize;

      //If the change in index is bigger than our list size, rerender everything
      if (bufferEndIndex - this.bufferEndIndex > this.bufferItemsLength) {
        for (i = bufferStartIndex; i <= bufferEndIndex; i++) {
          this.appendItem(i);
        }
      //Append new items if scrolling down
      } else if (bufferEndIndex > this.bufferEndIndex) {
        for (i = this.bufferEndIndex + 1; i <= bufferEndIndex; i++) {
          this.appendItem(i);
        }
      //Prepend new items if scrolling up
      } else if (bufferStartIndex < this.bufferStartIndex) {
        for (i = this.bufferStartIndex - 1; i >= bufferStartIndex; i--) {
          this.prependItem(i);
        }
      }

      //Detach items that aren't in the new range
      for (var dataIndex in this.renderedItems) {
        if (dataIndex < bufferStartIndex ||
            dataIndex > bufferEndIndex) {
          this.removeItem(dataIndex);
        }
      }

      //Save values
      this.bufferStartIndex = bufferStartIndex;
      this.bufferEndIndex = bufferEndIndex;
      this.bufferItemsLength = bufferItemsLength;
      this.lastRenderScrollValue = this.bufferStartIndex * this.itemScrollSize;

      try {
        this.dataSource.scope.$digest();
      } catch(e) {}
    },
    prependItem: function(dataIndex) {
      return this.renderItem(dataIndex, true);
    },
    appendItem: function(dataIndex) {
      return this.renderItem(dataIndex, false);
    },
    renderItem: function(dataIndex, shouldPrepend) {
      var item = this.dataSource.getItem(dataIndex);
      if (item) {
        this.dataSource.attachItem(item, shouldPrepend);
        this.renderedItems[dataIndex] = item;
      }
    },
    removeItem: function(dataIndex) {
      var item = this.renderedItems[dataIndex];
      if (item) {
        this.dataSource.detachItem(this.renderedItems[dataIndex]);
        delete this.renderedItems[dataIndex];
      }
    }
  };

  return CollectionView;
}])

.factory('$collectionViewDataSource', [
  '$cacheFactory',
function($cacheFactory) {
  var nextCacheId = 0;
  function ItemCache() {
    this.cache = $cacheFactory(nextCacheId++, { size: 500 });
  }
  ItemCache.prototype = {
    put: function(key, value) {
      return this.cache.put(hashKey(key), value);
    },
    get: function(key) {
      return this.cache.get(hashKey(key));
    },
  };
  function CollectionViewDataSource(options) {
    this.expression = options.expression;
    this.scope = options.scope;
    this.transcludeFn = options.transcludeFn;
    this.transcludeParent = options.transcludeParent;
    this.itemCache = new ItemCache();

    var keys = this.expression.split(/\s+in\s+/);
    this.keyExpression = keys[0];
    this.listExpression = keys[1];

    this.scope.$watch(this.listExpression, angular.bind(this, this.dataWatchAction));
    this.dataWatchAction(this.scope.$eval(this.listExpression));
  }
  CollectionViewDataSource.prototype = {
    compileItem: function(index) {
      var value = this.data[index];
      var childScope = this.scope.$new();
      var element;

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
      if (index >= this.getLength()) return;

      var value = this.data[index];
      var item = this.itemCache.get(value);
      if (!item) {
        item = this.compileItem(index);
        this.itemCache.put(value, item);
      }

      item.scope.$index = item.index = index;
      item.scope.$first = (index === 0);
      item.scope.$last = (index === (this.getLength() - 1));
      item.scope.$middle = !(item.scope.$first || item.scope.$last);
      item.scope.$odd = !(item.scope.$even = (index&1) === 0);

      return item;
    },
    attachItem: function(item, shouldPrepend) {
      if (shouldPrepend) {
        this.transcludeParent.prepend(item.element);
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
      return this.data || [];
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
      var itemScrollSize = +$attr.scrollItemSize;
      var dataSource = new $collectionViewDataSource({
        expression: $attr.scrollCollectionRepeat,
        scope: $scope,
        transcludeFn: $transclude,
        transcludeParent: $element.parent(),
      });
      var collectionView = new $collectionView(scrollCtrl, dataSource, itemScrollSize);

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
      key = obj.$$hashKey = ionic.Util.nextUid();
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
