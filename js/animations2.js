////////////////////////////////////////////////////////////////////////////////
/// Hey Aman! My bro-in-law! This isn't the cleanest code, but I spend the
/// time I could have been cleaning this up being a good hubby-to-be for Natra
/// LOL!
/// Anyway, I love you my friend, see you soon!
////////////////////////////////////////////////////////////////////////////////

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".fadeIn").forEach(function(elem) {
  ScrollTrigger.matchMedia({  
    "(max-width: 799px)": function() {
      gsap.set(elem, {y: 50, opacity: 0});
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 100%",
          },
        duration: .65, 
        y: 0, 
        ease: "expo", 
        overwrite: "auto",
      });
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 100%",
          },
        duration: .3, 
        opacity: 1, 
        ease: "none", 
        overwrite: "auto",
      });
    },
    "(min-width: 800px)": function() {
      gsap.set(elem, {y: 100, opacity: 0});
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          },
        duration: .75, 
        y: 0, 
        ease: "expo", 
        overwrite: "auto",
      });
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          },
        duration: .3, 
        opacity: 1, 
        ease: "none", 
        overwrite: "auto",
      });
    },
    "(min-width: 1240px)": function() {
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
      });
    }
  });
});


const tl = gsap.timeline().pause();

tl
  .from("#intro-top .eyebrow", { duration: 0.5, opacity: 0, y: 20, ease: Power2.easeOut }, 1)
  .from("#intro h1 #natra", { duration: 0.5, opacity: 0, y: 20, ease: Power2.easeOut }, "+=.2")
  .from("#intro h1 #amp", { duration: 0.4, opacity: 0, scale: .5, ease: Power2.easeOut })
  .from("#intro h1 #blaine", { duration: 0.4, opacity: 0, y: 20, ease: Power2.easeOut })
  .from("#getting-married", { duration: 0.4, opacity: 0, scale: .9, ease: Power2.easeOut });




var sections = ["#the-big-day","#hotels","#rsvp-form","#gifts"]

sections.forEach(function(section){
  ScrollTrigger.create({
    trigger: section,
    // markers: true,
    onEnter: function(trigger) { 
      const triggerSection = trigger.trigger;
      triggerSection.classList.add("viewing"); },
    // toggleClass: "viewing",
    start: "top 70%",
    fastScrollEnd: true,
  });
});

ScrollTrigger.create({
    trigger: "#image-section",
    // markers: true,
    onEnter: function(trigger) { 
      const triggerSection = trigger.trigger;
      triggerSection.classList.add("viewing"); },
    // toggleClass: "viewing",
    start: "top 40%",
    fastScrollEnd: true,
  });




function checkUrlForAnchor() {
  
  startMeUp();
  const body = document.getElementById('wrapper');
  body.classList.remove("preload");
}


function startMeUp() {
  // code to run if no anchor tag is present
  // console.log("startMeUp function called");
  setTimeout(gsap.to(tl, { duration: 2, progress: 1}), 500);
}

// call checkUrlForAnchor on page load
window.addEventListener("load", checkUrlForAnchor);