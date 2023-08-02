
const rowsPerColumn = 6; // Number of rows per column in the name list

const attendeeListDiv = document.getElementById('attendee-list');

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_i80MA53gvRdvr_hHCmDU_VhL7CAHxrOy9GREowqSa1i1nML8Y8JIs-Qw6_9u7POZ_4KKfGWD5_HW/pub?output=csv';

function fetchDataFromGoogleSheet() {
  Papa.parse(googleSheetURL, {
    download: true,
    header: true,
    complete: function (results) {
      const attendees = results.data;
      console.log(attendees);
      // Sort attendees by first name
      attendees.sort((a, b) => a['First Name'].localeCompare(b['First Name']));

      // Clear existing data
      attendeeListDiv.innerHTML = '';

      // Number of attendees per column
      const attendeesPerColumn = 10;

      // Create columns and populate attendee list
      let currentColumn;
      attendees.forEach((attendee, index) => {
        if (index % attendeesPerColumn === 0) {
          currentColumn = document.createElement('div');
          currentColumn.classList.add('attendee-column');
          attendeeListDiv.appendChild(currentColumn);
        }

        const card = document.createElement('div');
        card.classList.add('person-row');
        card.textContent = `${attendee['First Name']}`;
        const tableNumber = document.createElement('span');
        tableNumber.classList.add('table-number');
        tableNumber.textContent = `${attendee.Table}`;
        card.appendChild(tableNumber);
        currentColumn.appendChild(card);
      });
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromGoogleSheet();
});


    function updateCountdown() {
  // Set the target date to August 5, 5:15 AM (local time)
  const targetDate = new Date('2023-08-05T17:00:00');

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the difference between the target date and the current date
  const timeDifference = targetDate - currentDate;

  // Check if the target date has already passed
  if (timeDifference <= 0) {
    document.getElementById('countdown').innerText = "It's happening!";
    return;
  }

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

   // Prepare the countdown string
  let countdownString = "In ";
  if (days > 0) {
    countdownString += days + (days === 1 ? " day" : " days");
  }
  else if (hours > 0) {
    // countdownString += ", ";
    countdownString += hours + (hours === 1 ? " hour" : " hours") + ", ";
    countdownString += minutes + (minutes === 1 ? " minute" : " minutes") + ", ";
    countdownString += seconds + (seconds === 1 ? " second" : " seconds");
  }
  
  countdownString +="...";

  // Display the countdown
  document.getElementById('countdown').innerText = countdownString;
}



// Update the countdown every second
setInterval(updateCountdown, 1000);

// Call the update function once immediately to avoid a delay in displaying the countdown
updateCountdown();
