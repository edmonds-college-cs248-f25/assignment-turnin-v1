// Called after HTML is parsed because index.html uses <script defer>

function init() {

const emailField = document.getElementById("email");
const form = document.getElementById("submissionForm");

// validate user input before submitting
// This fires BEFORE the browser form POST.
form.addEventListener("submit", function (event) {
  emailField.style.border = "";      // Clear old styling
  let isValid = true;

  const email = emailField.value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    emailField.style.border = "2px solid red";
    alert("Please enter a valid email.");
    isValid = false;
  }
  // Check other required fields here 

  if (!isValid) { event.preventDefault(); }   // Stop the browser from submitting the form
});

}

init();
