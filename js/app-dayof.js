////////////////////////////////////////////////////////////////////////////////
/// Hey Aman! My bro-in-law! This isn't the cleanest code, but I spent the
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