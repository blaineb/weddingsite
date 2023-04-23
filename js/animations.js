

document.addEventListener("DOMContentLoaded", function() {
  
  gsap.registerPlugin(ScrollTrigger);
  
  var	wideScreen = window.matchMedia("(min-width: 800px)");
  var	narrowScreen = window.matchMedia("(max-width: 799px)");
  
  gsap.utils.toArray(".fadeIn").forEach(function(elem) {
        
    if(wideScreen.matches) {
          hide(elem); // assure that the element is hidden when scrolled into view above 800px screen-width
    }
    else {
          hide(elem); // assures that the element is visible when scrolled into view below 800px screen-width
    }

    console.log("Update2");
    ScrollTrigger.matchMedia({	
      // desktop
      "all": function() {
        // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

       
        ScrollTrigger.create({
          trigger: elem,
          fastScrollEnd: true,
          // scrub: true,
          onEnter: function() { animateFrom(elem) }, 
          onEnterBack: function() { animateFrom(elem, -1) },
          onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });

      },

      // mobile
      "(max-width: 799px)": function() {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore. 
        // gsap.set(elem, {autoAlpha:.5, y: 100});
        // ScrollTrigger.create({
        //   trigger: elem,
        //   fastScrollEnd: true,
        //   // scrub: true,
        //   y: 0,
        //   autoAlpha: 1,
        //   duration: 1.25,
        //   ease: 'expo',
        //   overwrite: 'auto',
        // });
        // ScrollTrigger.saveStyles(".gs_reveal_fromLeft, .gs_reveal_fromRight, .gs_reveal");

        // return function() {
        //   gsap.kill(); 
        //   other cleanup code can go here. 
        // };


      },

      // all 
      "(min-width: 800px)": function() {
        // ScrollTriggers created here aren't associated with a particular media query,
        // so they persist.
      }

    });
    

  });
  
});



function animateFrom(elem, direction) {
  direction = direction | 1;

  var x = 0,
      y = direction * 48;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -48;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 48;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, opacity: 0}, {
    duration: .75, 
    x: 0,
    y: 0, 
    opacity: 1, 
    ease: "expo", 
    overwrite: "auto",
    scrub: true,
    fastScrollEnd: true,
  });
}



function hide(elem) {
  gsap.set(elem, {opacity: 0});
}

function unhide(elem) {
  gsap.set(elem, {opacity: 1});
}



// gsap.to(".pContent", {
//   yPercent: -100,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".pSection",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

// gsap.to(".our-story-image", {
//   yPercent: -40,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#our-story",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

gsap.fromTo(".our-story-image", { 
  yPercent: 20,
}, {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: "#our-story",
    start: "top bottom", //top of element, bottom of viewport
    end: "bottom top",  //bottom of element, top of viewport
    scrub: true,
    // markers: true,
  }
})

var sections = ["#the-big-day","#hotels","#rsvp-form","#gifts"]

sections.forEach(function(section){
  ScrollTrigger.create({
    trigger: section,
    // markers: true,
    toggleClass: "viewing",
    start: "top 70%",
    fastScrollEnd: true,
  });
});

ScrollTrigger.create({
    trigger: "#image-section",
    // markers: true,
    toggleClass: "viewing",
    start: "top 40%",
    fastScrollEnd: true,
  });

