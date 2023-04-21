const introDiv = document.getElementById('getting-married')
const gettingMarried = new CircleType(introDiv);

function updateRadius() {
  const viewportWidth = window.innerWidth;
  let radius;
  if (viewportWidth > 960) {
    radius = viewportWidth * .45; // Adjust the multiplier to change the radius
  }
  else if (viewportWidth > 767){
    radius = viewportWidth * .4; // Adjust the multiplier to change the radius
  }
  else {
    radius = viewportWidth * .7; // Adjust the multiplier to change the radius
  }
  
  gettingMarried.radius(radius).dir(-1);
  document.getElementById('radius').textContent = radius;

}

// Update the radius when the page loads
updateRadius();
function modulate(value, inputRange, outputRange) {
  const inputMin = inputRange[0];
  const inputMax = inputRange[1];
  const outputMin = outputRange[0];
  const outputMax = outputRange[1];
  const inputRangeSize = inputMax - inputMin;
  const outputRangeSize = outputMax - outputMin;
  const normalizedValue = (value - inputMin) / inputRangeSize;
  const outputValue = (normalizedValue * outputRangeSize) + outputMin;
  return outputValue;
}
function transformElement(element, viewportWidth) {
  const translateXRange = [-100, 100]; // range for translateX property
  const translateXRangeSmall = [0, 46];
  const rotateRangeLarge = [-32, -9]; // range for rotate property for viewport widths greater than 960px
  const rotateRangeSmall = [-32, -16]; // range for rotate property for viewport widths less than 960px
  const viewportRangeLarge = [960, 1920]; // viewport range for widths greater than 960px
  const viewportRangeSmall = [640, 960]; // viewport range for widths less than 960px

  function updateTransform() {
    updateRadius();
    const width = window.innerWidth;
    let translateX, rotate;
    if (window.matchMedia("(max-width: 767px) and (orientation: landscape)").matches) {
      document.getElementById('rotate').textContent = "Your code worked"
      rotate = 0;
    } else if (width >= viewportRangeLarge[0] && width <= viewportRangeLarge[1]) {
      // Use range mapping for viewport widths between 960 and 1920px
      translateX = modulate(width, viewportRangeLarge, translateXRange);
      rotate = modulate(width, viewportRangeLarge, rotateRangeLarge);
    } else if (width >= viewportRangeSmall[0] && width <= viewportRangeSmall[1]) {
      // Use range mapping for viewport widths between 0 and 960px
      translateX = modulate(width, viewportRangeSmall, translateXRangeSmall);
      // translateX = 32
      rotate = modulate(width, viewportRangeSmall, rotateRangeSmall);
    } else if (width < viewportRangeSmall[0]) {
      // Use the smallest value in the property range for viewport widths smaller than 0
      // translateX = translateXRange[0];
      // rotate = rotateRangeSmall[0];
      translateX = -46
      rotate = 0
    } else if (width > viewportRangeLarge[1]) {
      // Use the largest value in the property range for viewport widths larger than 1920
      translateX = translateXRange[1];
      rotate = rotateRangeLarge[1];
    } 
    document.getElementById('x').textContent = Math.round(translateX);
    document.getElementById('rotate').textContent = Math.round(rotate);
    document.getElementById('width').textContent = window.innerWidth;
    document.getElementById('height').textContent = window.innerHeight;

    // Set transform properties on element
    element.style.transform = `translateX(${translateX}px) rotate(${rotate}deg)`;
  }

  // Call updateTransform initially
  updateTransform();

  // Call updateTransform whenever the browser is resized
  window.addEventListener('resize', updateTransform);
}
transformElement(introDiv, window.innerWidth);







// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');

// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// // Move the cursor
// function onMouseMove(e) {
//   TweenMax.to($bigBall, .4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15
//   })
//   TweenMax.to($smallBall, .1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7
//   })
// }

// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4
//   })
// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1
//   })
// }

// // Create a new ScrollMagic controller
// var controller = new ScrollMagic.Controller();

// var tween = new TimelineMax ()
//     .add([
//       TweenMax.fromTo("#test", 1, {scale: 1, autoAlpha: 1, top: 100}, {top: 500, ease: Linear.easeNone}),
//       // TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
//     ]);

//   // build scene
//   var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: window.innerHeight})
//           .setTween(tween)
//           .addIndicators() // add indicators (requires plugin)
//           .addTo(controller)


// gsap.to("#test", {
//   yPercent: 200,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#intro",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

// gsap.to("#hero-image", {
//   yPercent: 20,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#intro",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

// window.addEventListener('load', function() {
//   var header = document.querySelector('header');
//   var sections = document.querySelectorAll('section');

//   window.addEventListener('scroll', function() {
//     var scrollTop = window.pageYOffset;

//     sections.forEach(function(section) {
//       var sectionTop = section.offsetTop - 34;
//       var sectionBottom = sectionTop + section.offsetHeight;

//       if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
//         if (section.classList.contains('dark')) {
//           header.classList.add('dark');
//         } else {
//           header.classList.remove('dark');
//         }
//       }
//     });
//   });
// });

// gsap.to(".pImage", {
//   yPercent: 50,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".pSection",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });