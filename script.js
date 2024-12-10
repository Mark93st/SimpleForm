const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");

// Disable the button by default
submitButton.disabled = true;

// Listen for input events
numberInput.addEventListener("input", () => {
  const value = parseFloat(numberInput.value);

  // Enable the button if the value is greater than 10
  if (!isNaN(value) && value > 10) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Optional: Handle button click
submitButton.addEventListener("click", () => {
  alert("Valid number submitted: " + numberInput.value);
});