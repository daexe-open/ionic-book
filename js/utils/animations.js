(function(ionic, collide) {

ionic.Animation = {
  'slide-left-right-ios7': makeSlideAnimation,
  'modal': makeModalAnimation
};

function makeSlideAnimation(enterEl, leaveEl, isReverse) {
  var animator = collide.animator({
    easing: 'cubic-bezier(0.4, 0.6, 0.2, 1)',
    duration: 400
  })
  .on('step', isReverse ? function(v) {
    setTranslate3d(enterEl, -100 + (v*100) + '%', 0, 0);
    setTranslate3d(leaveEl, (v*100) + '%', 0, 0);
  } : function(v) {
    setTranslate3d(enterEl, 100 - (v*100) + '%', 0, 0);
    setTranslate3d(leaveEl, -(v*100) + '%', 0, 0);
  })
  .on('complete', function() {
    setTranslate3d(enterEl, '');
    setTranslate3d(leaveEl, '');
  });

  return animator;
}

function makeModalAnimation(enterEl, leaveEl, isReverse) {
  var animator = collide.animator({
    easing: 'cubic-bezier(0.1, 0.7, 0.1, 1)',
    duration: 400
  })
    .on('start', isReverse ? function() {
      leaveEl.css('z-index', 2);
    } : function() {
      enterEl.css('z-index', 2);
    })
    .on('step', isReverse ? function(v) {
      setTranslate3d(leaveEl, 0, v*100 + '%', 0);
    } : function(v) {
      setTranslate3d(enterEl, 0, 100 - v*100 + '%', 0);
    })
    .on('complete', isReverse ? function() {
      leaveEl.css('z-index', '');
    } : function() {
      enterEl.css('z-index', '');
    });

  return animator;
}

function setTranslate3d(el, x, y, z) {
  var isXOnly = arguments.length === 2;
  el.css(ionic.CSS.TRANSFORM, isXOnly ?  x : 'translate3d('+x+','+y+','+z+')');
}

})(ionic, collide);
