
function $ionicStickyManager($element, $scrollElement) {
  var el = $element[0];
  var isEnabled = true;
  var isSticking = false;

  var elementOffsetTop;
  var placeholder;

  var scrollFn = ionic.animationFrameThrottle(onScroll);
  $scrollElement.on('scroll', scrollFn);
  calculateOffsetTop();

  return {
    recalculate: calculateOffsetTop,
    sticking: function() { return isSticking; },
    enabled: enabled,
    unbind: unbind
  };

  function calculateOffsetTop() {
    elementOffsetTop = el.offsetTop;
  }

  function enabled(isEnabled) {
    if (arguments.length) { 
      isEnabled = !!isEnabled;
      if (!isEnabled) {
        setSticking(false);
      }
    }
    return isEnabled;
  }
  function unbind() {
    setSticking(false);
    $scrollElement.off('scroll', scrollFn);
  }

  function onScroll(e) {
    if (!isEnabled) {
      return;
    }
    var scrollTop = e.detail.scrollTop;

    if (!isSticking && scrollTop > elementOffsetTop) {
      setSticking(true);
    } else if (isSticking && scrollTop <= elementOffsetTop) {
      setSticking(false);
    }
  }

  function setSticking(newSticking) {
    if (newSticking) {
      placeholder = $element.clone();
      $element.replaceWith(placeholder);

      $scrollElement.parent().append($element);

      el.style[ionic.CSS.TRANSFORM] = 'translate3d(0,' +
        elementOffsetTop + $scrollElement[0].offsetTop + 'px,0)';
    } else {
      placeholder.replaceWith($element);
      el.style[ionic.CSS.TRANSFORM] = '';
    }
    isSticking = newSticking;
  }
}

angular.module('ionic')
.directive('sticky', [function() {
  return {
    restrict: 'A',
    require: '^$ionicScroll',
    link: function($scope, $element, $attr, scrollCtrl) {
      var sticker = $ionicStickyManager($element, scrollCtrl.$element);

      $scope.$watch('!!(' + $attr.sticky + ')', function(sticking) {
        sticker.enabled(sticking);
      });
    }
  };
}]);
