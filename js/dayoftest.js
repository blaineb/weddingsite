const attendeeListDiv = document.getElementById('attendee-list');
// const sortOptions = document.getElementsByName('sort-option');

let attendees = [];

const rowsPerColumn = 6; // Number of rows per column in the name list

function renderAttendeeList() {
  attendeeListDiv.innerHTML = '';

  const sortedAttendees = [...attendees];

  // const sortOption = [...sortOptions].find((option) => option.checked).value;

  // switch (sortOption) {
  //   case 'first-name':
  //     sortedAttendees.sort((a, b) => a.firstName.localeCompare(b.firstName));
  //     renderByName(sortedAttendees);
  //     break;
  //   case 'table-number':
  //     sortedAttendees.sort((a, b) => a.tableNumber - b.tableNumber);
  //     renderByTable(sortedAttendees);
  //     break;
  // }
}

function renderByName(sortedAttendees) {
  const columns = Math.ceil(sortedAttendees.length / rowsPerColumn);

  for (let col = 0; col < columns; col++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');

    for (let row = 0; row < rowsPerColumn; row++) {
      const index = col * rowsPerColumn + row;
      if (index >= sortedAttendees.length) break;

      const attendee = sortedAttendees[index];
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = `${attendee.firstName} (Table ${attendee.tableNumber})`;
      columnDiv.appendChild(card);
    }

    attendeeListDiv.appendChild(columnDiv);
  }
}

function renderByTable(sortedAttendees) {
  let currentTableNumber = null;
  let tableContainer = null;

  sortedAttendees.forEach((attendee) => {
    if (currentTableNumber !== attendee.tableNumber) {
      currentTableNumber = attendee.tableNumber;
      const tableHeader = document.createElement('div');
      tableHeader.classList.add('card', 'table-header');
      tableHeader.textContent = `Table ${currentTableNumber}`;
      tableContainer = document.createElement('div');
      tableContainer.classList.add('table-container');
      tableContainer.appendChild(tableHeader);
      attendeeListDiv.appendChild(tableContainer);
    }

    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = attendee.firstName;
    tableContainer.appendChild(card);
  });
}

function handleSortChange() {
  renderAttendeeList();
}

// sortOptions.forEach((option) => option.addEventListener('change', handleSortChange));

const csvData = `First Name,Last Name,Table Number
John,Doe,1
Jane,Smith,3
Alice,Johnson,2
Bob,Williams,1
Eve,Smith,3
Michael,Anderson,2
Sophia,Brown,2
William,Johnson,1
Olivia,Davis,3
James,Miller,2
Ava,Moore,1
Alexander,Smith,3
Charlotte,Johnson,1
Mason,Jones,2
Amelia,Martin,1
`;

function handleFileData() {
  Papa.parse(csvData, {
    complete: function (results) {
      const parsedData = results.data.slice(1); // Exclude header row

      attendees = parsedData.map((row) => ({
        firstName: row[0],
        tableNumber: parseInt(row[2]),
      }));

      renderAttendeeList();
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleFileData();
});
