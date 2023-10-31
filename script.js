// Function to change the logo dynamically
function changeLogo(newLogoSrc) {
  const logo = document.querySelector('header img');
  logo.src = newLogoSrc;
}

// Example usage:
// changeLogo('new_logo.png'); // Replace 'new_logo.png' with the actual path to the new logo image.

// Define a global variable to store the book data.
let bookData = [];

// Function to parse the CSV data and convert it into an array of book objects.
function parseCSV(csvData) {
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");
  const books = [];

  for (let i = 1; i < lines.length; i++) {
    const bookData = lines[i].split(",");
    const book = {
      Title: bookData[0],
      Author: bookData[1],
      Subject: bookData[2],
      Pages: bookData[3],
      Publisher: bookData[4],
    };
    books.push(book);
  }

  return books;
}

// Function to update the table with book data.
function updateTable() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  for (const book of bookData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.Title}</td>
      <td>${book.Author}</td>
      <td>${book.Subject}</td>
      <td>${book.Pages}</td>
      <td>${book.Publisher}</td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
    `;
    tableBody.appendChild(row);
  }
}

// Function to handle the CSV import button click event.
document.getElementById("importCSV").addEventListener("click", function () {
  const fileInput = document.getElementById("csvFile");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const csvData = e.target.result;
      bookData = parseCSV(csvData);
      updateTable();
    };

    reader.readAsText(file);
  }
});

// Your existing code for other functionality, such as adding, editing, and deleting books.
