////////////////////////////////////////////////////////////////////////////////
/// Hey Aman! My bro-in-law! This isn't the cleanest code, but I spend the
/// time I could have been cleaning this up being a good hubby-to-be for Natra
/// LOL!
/// Anyway, I love you my friend, see you soon!
////////////////////////////////////////////////////////////////////////////////

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

  // console.log(viewportWidth);
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
  // console.log("Pre-prevent");
  event.preventDefault(); // prevent the form from submitting
  // console.log("Post-prevent");
  // Validate name input before submitting the form
  const isNameValid = validateNameInput();
  // console.log("Validate");
  if (isNameValid) {
    const data = new FormData(form);
    const action = event.target.action;
    event.preventDefault();
    submitButton.textContent = "Submitting"
    fetch(action, {
       method: 'POST',
      body: data
    })
    .then(function() {
      // console.log("Success!")
    
    const nameValue = nameInput.value.trim();
    const nameParts = nameValue.split(" ");
    const responseValue = document.querySelector("input[name='Response']:checked").value;
    // submitButton.classList.add("hidden");
    responseSection.classList.remove("hidden");
    // check which radio button is selected and display a different message accordingly
    if (responseValue === "accepts") {
      confetti({
        particleCount: 250,
        spread: 180,
        colors: ["#F1E171","#DC6E2B","#414812","#F4D9D8","#E2C2D8", "#7D7932"],
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

const anchorLinks = document.querySelectorAll('.anchor-tag');

anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // prevent the default action of the link
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  });
});

console.log("Hey Aman! I love you bro-in-law :)");