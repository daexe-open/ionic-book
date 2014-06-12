

IonicModule
  .directive('onHold', gestureDirective('onHold', 'hold'))
  .directive('onTap', gestureDirective('onTap', 'tap'))
  .directive('onTouch', gestureDirective('onTouch', 'touch'))
  .directive('onRelease', gestureDirective('onRelease', 'release'))

  .directive('onDrag', gestureDirective('onDrag', 'drag'))
  .directive('onDragUp', gestureDirective('onDragUp', 'drag', 'up'))
  .directive('onDragRight', gestureDirective('onDragRight', 'drag', 'right'))
  .directive('onDragDown', gestureDirective('onDragDown', 'drag', 'down'))
  .directive('onDragLeft', gestureDirective('onDragLeft', 'drag', 'left'))

  .directive('onSwipe', gestureDirective('onSwipe', 'swipe'))
  .directive('onSwipeUp', gestureDirective('onSwipeUp', 'swipe', 'up'))
  .directive('onSwipeRight', gestureDirective('onSwipeRight', 'swipe', 'right'))
  .directive('onSwipeDown', gestureDirective('onSwipeDown', 'swipe', 'down'))
  .directive('onSwipeLeft', gestureDirective('onSwipeLeft', 'swipe', 'left'));


function gestureDirective(directiveName, eventType, direction) {
  return ['$ionicGesture', function($ionicGesture) {
    return {
      restrict: 'A',
      link: function($scope, $element, $attr) {

        var listener = function(ev) {
          if(direction && ev.gesture.direction != direction) return;
          $scope.$eval( $attr[directiveName] );
        };

        var gesture = $ionicGesture.on(eventType, listener, $element);

        $scope.$on('$destroy', function() {
          $ionicGesture.off(gesture, eventType, listener);
        });

      }
    };
  }];
}
