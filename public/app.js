// Called after HTML is parsed because index.html uses <script defer>

function init() {
  function handleClick()
  {
    console.log("Handle Click Here");
    let submission = document.getElementById("submission").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let assignmentNumber = document.getElementById("assignmentNumber").value;

    //window.alert("Clicked!");
    console.log(submission);
    console.log(email);
    console.log(name);
    console.log(assignmentNumber);

  }
  document.getElementById("submitJSONButton").addEventListener("click", handleClick);

}
init();

/* function init() {
  const statusEl = document.getElementById("status");

  fetch("/api/example")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      statusEl.textContent = data.message ?? "No message field returned.";
    })
    .catch((err) => {
      console.error(err);
      statusEl.textContent = "Error contacting the server. See console for details.";
    });
}

init();
*/

  // --------------------------------------------------------
  // Commented-out examples showing common patterns.
  // --------------------------------------------------------

  // --- Example: GET request *with query parameters* ---
  /*
  function loadItems(category) {
    fetch(`/api/items?category=${encodeURIComponent(category)}`)
      .then(res => res.json())
      .then(data => {
        console.log("Items:", data);
        // TODO: Update the DOM with results
      })
      .catch(console.error);
  }
  */

  // --- Example: POST request sending JSON to the server ---
  /*
  function submitData(obj) {
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      console.log("Server replied:", response);
      // TODO: Update the DOM or show feedback to the user
    })
    .catch(console.error);
  }
  */

  // --- Example: Attaching event listeners ---
  /*
  document.getElementById("myButton").addEventListener("click", () => {
    // TODO: Call one of your fetch functions here
  });
  */

