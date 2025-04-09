//your JS code here. If required.
// Function to ask for confirmation
function askConfirmation() {
  // Show confirmation dialog
  const userConfirmation = confirm("Do you want to proceed?");
  
  // Check user's response
  if (userConfirmation) {
    alert("You clicked OK. Proceeding...");
  } else {
    alert("You clicked Cancel. Exiting...");
  }
}
