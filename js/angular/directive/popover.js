/**
 * @ngdoc directive
 * @name ionPopdown
 * @module ionic
 * @restrict E
 * @codepen saoBG
 * @description
 * The popover directive makes it easy to add a button item with a dropdown list of options.
 *
 * @usage
 * ```html
 * <ion-popover>
 *   <ion-item>Item 1</ion-item>
 * </ion-popover>
 * ```
 */
IonicModule
.directive('ionPopover', ['$document', '$animate', '$parse', '$timeout',
function($document, $animate, $parse, $timeout) {
  return {
    restrict: 'A',
    controller: [function(){}],
    compile: function(element, attr) {
      element.addClass('popover-parent');
      return function link(scope, element, attr, popoverCtrl) {
        var isOpen = false;
        var popoverIsShown = $parse(attr.ionPopover);

        if (!popoverIsShown.assign) {
          throw new Error('ion-popover expected an assignable expression for attribute ' + 
                          'ion-popover, got ion-popover="' + attr.ionPopover + '"!');
        }

        scope.$watch(attr.ionPopover, popoverWatchAction);

        function popoverWatchAction(shouldShow) {
          if (shouldShow) {
            openPopover();
          } else {
            closePopover();
          }
        }

        function openPopover() {
          if (isOpen) return;
          isOpen = true;

          popoverCtrl.content && $animate.enter(popoverCtrl.content, element);
          $document.on('click', documentClosePopover);
        }

        function closePopover() {
          if (!isOpen) return;
          isOpen = false;

          popoverCtrl.content && $animate.leave(popoverCtrl.content);
          $document.off('click', documentClosePopover);
        }

        function documentClosePopover(e) {
          if (!ionic.DomUtil.getParentOrSelfWithClass(e.target, 'popover-parent', 5)) {
            e.stopPropagation();
            $timeout(function() {
              popoverIsShown.assign(scope, false);
            });
          }
        }
      };

    }
  };
}])
.directive('ionPopoverContent', ['$animate', function($animate) {
  return {
    restrict: 'E',
    require: '^ionPopover',
    transclude: true,
    replace: true,
    template: 
      '<div class="popover">' +
        '<div class="popover-content" ng-transclude></div>' +
      '</div>',
    link: function(scope, element, attr, popoverCtrl) {
      element.remove();
      popoverCtrl.content = element;
    }
  };
}]);
