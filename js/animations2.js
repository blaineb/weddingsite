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
    }
  });
});


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