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
.directive('ionPopover', ['$document', '$ionicBackdrop', function($document, $ionicBackdrop) {
  return {
    restrict: 'A',
    compile: function(element, attr) {
      element.addClass('popover')

      var docClose = function(e) {
        if(e.type === 'keyup' && e.which == 27) {
          element.removeClass('popover-active');
        } else if(e.type !== 'keyup') { 
          element.removeClass('popover-active');
        }

        $document.off('click', docClose);
        $document.off('keyup', docClose);
      };

      var open = function() {
        //$ionicBackdrop.retain();
        element.addClass('popover-active');
      };

      var close = function() {
        //$ionicBackdrop.release();
        element.removeClass('popover-active');
      };

      element.on('click', function(e) {
        if(element.hasClass('popover-active')) {
          close();
          $document.off('click', docClose);
          $document.off('keyup', docClose);
        } else {
          open();
          $document.on('click', docClose);
          $document.on('keyup', docClose);
        }

        return e.stopPropagation();
      });
    }
  }
}]);
