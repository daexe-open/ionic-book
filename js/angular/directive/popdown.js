/**
 * @ngdoc directive
 * @name ionPopdown
 * @module ionic
 * @restrict E
 * @codepen saoBG
 * @description
 * The popdown directive makes it easy to add a button item with a dropdown list of options.
 *
 * @usage
 * ```html
 * <ion-popdown>
 *   <ion-item>Item 1</ion-item>
 * </ion-popdown>
 * ```
 */
IonicModule
.directive('ionPopdown', ['$document', function($document) {
  return {
    restrict: 'A',
    compile: function(element, attr) {
      element.addClass('popdown')

      var docClose = function(e) {
        if(e.type === 'keyup' && e.which == 27) {
          element.removeClass('popdown-active');
        } else if(e.type !== 'keyup') { 
          element.removeClass('popdown-active');
        }

        $document.off('click', docClose);
        $document.off('keyup', docClose);
      };

      var open = function() {
        element.addClass('popdown-active');
      };

      var close = function() {
        element.removeClass('popdown-active');
      };

      element.on('click', function(e) {
        if(element.hasClass('popdown-active')) {
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
