// Get the display element
const display = document.getElementById("display");

// Append a value to the display
function appendToDisplay(value) {
  // Prevent multiple decimals in one number
  if (value === "." && display.value.slice(-1) === ".") return;

  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {
  try {
    // Use eval carefully — only for this simple calculator
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Optional: allow keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
