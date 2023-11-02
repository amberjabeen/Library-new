// Function to handle the "Add a book" button click event.
document.querySelector(".new").addEventListener("click", function () {
  // Toggle the visibility of the form
  const form = document.querySelector(".form");
  form.classList.toggle("hidden");
});

// Function to handle the form submission (you can extend this as needed).
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting and the page from refreshing

  // Get the form input values and process the data as needed
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const subject = document.querySelector("#subject").value;
  const pages = document.querySelector("#pages").value;
  const publisher = document.querySelector("#publisher").value;

  // You can add code here to handle the submitted data, such as adding it to the bookData array.
  // Then, you can update the table using the updateTable function from your previous code.
});






