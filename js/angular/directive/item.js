/**
* @ngdoc directive
* @name ionItem
* @parent ionic.directive:ionList
* @module ionic
* @restrict E
* Creates a list-item that can easily be swiped,
* deleted, reordered, edited, and more.
*
* See {@link ionic.directive:ionList} for a complete example & explanation.
*
* Can be assigned any item class name. See the
* [list CSS documentation](/docs/components/#list).
*
* @usage
*
* ```html
* <ion-list>
*   <ion-item>Hello!</ion-item>
* </ion-list>
* ```
*/
IonicModule
.directive('ionItem', [
  '$animate',
  '$compile',
function($animate, $compile) {
  return {
    restrict: 'E',
    scope: true,
    controller: ['$scope', '$element', function($scope, $element, optionButton) {
      var self = this;

      self.$scope = $scope;
      self.$element = $element;

      self.optionsContainer = null;
      self.addOptionButton = function(element) {
        if (!self.optionsContainer) {
          self.optionsContainer = jqLite('<div class="item-options">');
          $element.append(self.optionsContainer);
        }
        self.optionsContainer.append(element);
      };

      var optionsWidth;
      function refreshOptionsWidth() {
        optionsWidth = self.optionsContainer ? self.optionsContainer.prop('offsetWidth') : 0;
      }
      var optionsAnimator = collide.animator({
        duration: 250,
        easing: 'linear'
      })
        .on('step', function(percent) {
          $element.css(ionic.CSS.TRANSFORM, 'translateX(-' + (optionsWidth * percent) + 'px)');
        });

      var dragState;
      $element.on('drag', function(e) {
        if (!dragState) {
          refreshOptionsWidth();
          optionsAnimator.reverse(false);
          dragState = {
            startX: e.gesture.center.pageX
          };
        }
        var percent = (e.gesture.direction === 'left' ? 1 : -1) *
          (dragState.startX - e.gesture.center.pageX) / optionsWidth;
        console.log(percent);
        optionsAnimator.percent(percent);
      });
      $element.on('release', function(e) {
        var isOpen = optionsAnimator.percent() > 0.5;
        optionsAnimator.reverse(!isOpen).start();
        dragState = null;
      });
    }],
    compile: function($element, $attrs) {
      var isAnchor = angular.isDefined($attrs.href) ||
        angular.isDefined($attrs.ngHref) ||
        angular.isDefined($attrs.uiSref);
      var isComplexItem = isAnchor ||
        //Lame way of testing, but we have to know at compile what to do with the element
        /ion-(delete|option|reorder)-button/i.test($element.html());

        if (isComplexItem) {
          var innerElement = jqLite(
            isAnchor ?
            '<a class="item-content" ng-href="{{$href()}}" target="{{$target()}}"></a>' :
            '<div class="item-content"></div>'
          );
          innerElement.append($element.contents());

          $element.append(innerElement);
          $element.addClass('item item-complex');
        } else {
          $element.addClass('item');
        }

        return function link($scope, $element, $attrs) {
          $scope.$href = function() {
            return $attrs.href || $attrs.ngHref;
          };
          $scope.$target = function() {
            return $attrs.target || '_self';
          };
        };
    }
  };
}]);

