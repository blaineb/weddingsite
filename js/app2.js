gsap.registerPlugin(ScrollTrigger); /* register the ScrollTrigger plugin */
const animatables = gsap.utils.toArray(".fadeIn");
animatables.forEach(function(element) {
  gsap.set(element, {
    y: 60,
    opacity: 0,
    ease: 'power2.in',
    overwrite: 'auto',
  });
  ScrollTrigger.create({
    trigger: element,
    start: 'top 90%',
    end: 'top top',
    markers: false,
    onEnter: function() {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.4, // set duration for the animation
      });
    },
    // onLeave: function() {
    //   gsap.to(element, {
    //     y: -60,
    //     opacity: 0,
    //     duration: 0.4, // set duration for the animation
    //   });
    // },
    // onEnterBack: function() {
    //   gsap.to(element, {
    //     y: 0,
    //     opacity: 1,
    //     duration: 0.4, // set duration for the animation
    //   });
    // },
    // onLeaveBack: function() {
    //   gsap.to(element, {
    //     y: -60,
    //     opacity: 1,
    //     duration: 0.4, // set duration for the animation
    //   });
    // },
  });
});
// var element = document.querySelector(".fadeIn"); /* get the element */

// gsap.utils.toArray('section').forEach(section => {
//   const elems = section.querySelectorAll('.fadeIn');
//   // Set starting params for sections
//   gsap.set(elems, {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: 'power3.out',
//     overwrite: 'auto',
//   });
  
//   ScrollTrigger.create({
//     trigger: section,
//     start: 'top 60%',
//     end: 'top top',
//     markers: true,
//     onEnter: () => gsap.to(elems, {
//       y: 0,
//       opacity: 1,
//       stagger: 0.2,
//     }),
//     onLeave: () => gsap.to(elems, {
//       y: -30,
//       opacity: 0,
//       stagger: 0.2,
//     }),
//     onEnterBack: () => gsap.to(elems, {
//       y: 0,
//       opacity: 1,
//       stagger: -0.2,
//     }),
//     onLeaveBack: () => gsap.to(elems, {
//       y: 30,
//       opacity: 0,
//       stagger: -0.2,
//     }),
//   });
// })

// gsap.utils.toArray(".fadeIn").forEach(function(element) { /* loop through all elements with class "fadeIn" */
//   gsap.to(element, {
//     opacity: 1,
//     y: -30,
//     duration: .3,
//     scrollTrigger: {
//       trigger: element,
//       start: "top 80%", /* start the animation when the center of the element reaches the center of the viewport */
//       end: "bottom 30%", /* reverse the animation when the bottom of the element leaves the top of the viewport */
//       scrub: true, /* smooth out the animation */
//       onEnter: function() {
//         element.style.opacity = 1; /* set opacity to 1 onEnter */
//       },
//       onLeave: function() {
//         element.style.opacity = 0; /* set opacity to 0 onLeave */
//         element.style.top = "30px"; /* move up 30px onLeave */
//       },
//       // onEnterBack: function() {
//       //   element.style.opacity = 1; /* set opacity to 1 onEnterBack */
//       //   element.style.top = "0"; /* move down to its original position onEnterBack */
//       // },
//       // onLeaveBack: function() {
//       //   element.style.opacity = 0; /* set opacity to 0 onLeaveBack */
//       //   element.style.top = "30px"; /* move up 30px onLeaveBack */
//       // }
//     }
//   });
// });



const introDiv = document.getElementById('getting-married');
const gettingMarried = new CircleType(introDiv);
const footerText = new CircleType(document.getElementById('footer-text'));
footerText.radius(400).dir(-1);


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


function updateFooterText() {
  const viewportWidth = window.innerWidth;
  radius = (viewportWidth) / 2;
  footerText.radius(radius).dir(-1);

}
function updateIntroText() {
  const viewportWidth = window.innerWidth;
  let radius, translateX, rotate, translateY;

  console.log(viewportWidth);
  if (viewportWidth < 375) {
    radius = viewportWidth - 150; // Adjust the multiplier to change the radius
  }
  else if (viewportWidth > 960) {
    radius = viewportWidth * .8; // Adjust the multiplier to change the radius
  }
  else {
    radius = viewportWidth - 250;
  }
  
  // else if (viewportWidth > 767){
  //   radius = viewportWidth * .4; // Adjust the multiplier to change the radius
  // }
  // else {
  //   radius = viewportWidth * .7; // Adjust the multiplier to change the radius
  // }
  
  gettingMarried.radius(radius).dir(-1);
  document.getElementById('radius').textContent = radius;

}

function updateCircleTypes() {
  updateIntroText();
  updateFooterText();

}

// Update the radius when the page loads
updateIntroText();
updateFooterText();

window.addEventListener('resize', updateCircleTypes);


const form = document.getElementById("rsvp-form-group");
const preFormMessage = document.getElementById("pre-form-message");
const submitButton = document.getElementById("rsvp-submit");
const nameInput = document.getElementById("rsvp-input-name");
const nameInputError = document.getElementById("rsvp-input-name-error");
const acceptsRadio = document.getElementById("rsvp-input-accepts");
const declinesRadio = document.getElementById("rsvp-input-declines");
const responseSection = document.getElementById("rsvp-response-section");
const messageContainer = document.getElementById("rsvp-response");
const otherGuests = document.getElementById("rsvp-input-other-guests");
const errorMessage = document.getElementById("error-message");
const rsvpSection = document.getElementById("rsvp-form");



const otherGuestsSection = document.getElementById("other-guests-input-group");
acceptsRadio.addEventListener("change", function() {
  submitButton.textContent = "Submit";
  otherGuestsSection.classList.remove("hidden");
});

declinesRadio.addEventListener("change", function() {
  submitButton.textContent = "Send the bad news";
  otherGuestsSection.classList.add("hidden");
});
function validateNameInput() {
  const nameValue = nameInput.value.trim();
  const nameParts = nameValue.split(" ");

  if (nameValue === "") {
    errorMessage.textContent = "Don't forget to tell us who you are 😃";
    errorMessage.classList.remove("hidden");
    nameInput.classList.add("error");
    return false;
  } else {
    errorMessage.classList.add("hidden");
    nameInput.classList.remove("error");
    return true;
  }
}

nameInput.addEventListener("change", validateNameInput);

form.addEventListener("submit", function(event) {
  console.log("Pre-prevent");
  event.preventDefault(); // prevent the form from submitting
  console.log("Post-prevent");
  // Validate name input before submitting the form
  const isNameValid = validateNameInput();
  console.log("Validate");
  if (isNameValid) {
    const data = new FormData(form);
    const action = event.target.action;
    event.preventDefault();
    submitButton.textContent = "Submitting..."
    fetch(action, {
       method: 'POST',
      body: data
    })
    .then(function() {
      console.log("Success!")
    
    const nameValue = nameInput.value.trim();
    const nameParts = nameValue.split(" ");
    const responseValue = document.querySelector("input[name='Response']:checked").value;
    // submitButton.classList.add("hidden");
    responseSection.classList.remove("hidden");
    // check which radio button is selected and display a different message accordingly
    if (responseValue === "accepts") {
      confetti({
        particleCount: 250,
        spread: 180
      });

      messageContainer.textContent = `Yay!! We can't wait to celebrate with you, ${nameParts[0]}!`;
    } else if (responseValue === "declines") {
      messageContainer.textContent = `Thanks for letting us know, ${nameParts[0]}. We'll miss you!`;
    }

    // disable the form fields after submission
    nameInput.disabled = true;
    acceptsRadio.disabled = true;
    declinesRadio.disabled = true;
    otherGuests.disabled = true;
    form.classList.add("hidden");
    preFormMessage.classList.add("hidden");
    messageContainer.classList.add("show");

    // Scroll to the target element
    let target = responseSection;
    rsvpSection.scrollIntoView({ });
    // Get the height of the viewport
    // const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // Get the height of the target element
    // const targetHeight = responseSection.offsetHeight;
    // Calculate the scroll position to center the element in the viewport
    // const scrollPosition = responseSection.offsetTop - (viewportHeight / 2) + (targetHeight / 2);
    // Scroll to the new position
    // window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  });
  }
});


// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');

// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {if (window.CP.shouldStopExecution(0)) break;
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// // Move the cursor
// window.CP.exitedLoop(0);function onMouseMove(e) {
//   TweenMax.to($bigBall, .4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15 });

//   TweenMax.to($smallBall, .1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7 });

// }

// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4 });

// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1 });

// }
