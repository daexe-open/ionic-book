IonicModule

.controller('$ionicSlideBox', ['$scope', '$element', '$controller', '$collectionRepeatManager', '$timeout',
function($scope, $element, $controller, $collectionRepeatManager, $timeout) {
  var slidesElement = $element.children();
  var slidesNode = slidesElement[0];
  var slides = [];
  var scrollCtrl = $controller('$ionicScroll', {
    $scope: $scope,
    scrollViewOptions: {
      el: $element[0],
      paging: true,
      scrollingX: true,
      scrollingY: false,
      minDecelerationVelocityX: 30,
      bouncing: false
    }
  });
  var dataSource = {
    setup: angular.noop,
    destroy: angular.noop,
    dimensions: [],
    detachItem: function(item) {
      slidesElement.remove(item.element);
      disconnectScope(item.scope);
    },
    attachItemAtIndex: function(index) {
      var item = slides[index];

      slidesElement.append(item.element);
      reconnectScope(item.scope);

      return item;
    },
    getLength: function() {
      return slides.length;
    }
  };
  var collectionRepeatManager = new $collectionRepeatManager({
    dataSource: dataSource,
    element: $element,
    scrollView: scrollCtrl.scrollView
  });

  $timeout(init);
  $scope.$watchCollection(function () { return slides; }, recalculateDimensions);

  function init() {
    forEach(slidesNode.children, function(child) {
      child = jqLite(child);
      slides.push({
        element: child,
        scope: child.scope()
      });
    });
    recalculateDimensions();
    scrollCtrl.scrollView.resize();
    slidesElement.empty();
    collectionRepeatManager.resize();
  }

  function recalculateDimensions() {
    dataSource.dimensions.length = slides.length;
    var dimension = {
      width: slidesNode.offsetWidth,
      height: slidesNode.offsetHeight
    };
    for (var i = 0; i < slides.length; i++) {
      dataSource.dimensions[i] = dimension;
    }
  }
}])

.directive('ionSlideBoxTwo', ['$controller', function($controller) {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template:
      '<div class="slider">' +
        '<div class="slider-slides scroll" ng-transclude>' +
        '</div>' +
      '</div>',
    controller: '$ionicSlideBox',
    priority: 800,
    link: function link($scope, $element, $attr) {
      // slidesNode.appendChild = function(child) {
      //   slides.push(child);
      //   console.log('appendChild(', child, '); slides:', slides);
      // };
      // slidesNode.insertBefore = function(child, before) {
      //   var index = slides.indexOf(before);
      //   if (index === -1) {
      //     slides.push(child);
      //   } else {
      //     slides.splice(index, 0, child);
      //   }
      //   console.log('insertBefore(', child, ',', before, '); slides:', slides);
      // };
      // slidesNode.removeChild = function(child) {
      //   var index = slides.indexOf(child);
      //   if (index !== -1) {
      //     slides.splice(index, 1);
      //   }
      //   console.log('removeChild(', child, '); slides:', slides);
      // };
    }
  };
}])
.directive('ionSlideTwo', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    template: '<div class="slider-slide" ng-transclude></div>'
  };
});

