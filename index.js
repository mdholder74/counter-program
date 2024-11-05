// Get references to the button elements by grabbing the ids and the label where the count will be displayed
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// Initialize the count variable to 0
let count = 0;

// Event handler for the "Increase" button. Each time the button is clicked, the count is incremented by 1
increaseBtn.onclick = function () {
    count++; // Increment the count by 1
    countLabel.textContent = count; // Update the displayed count
};

// Event handler for the "Decrease" button. Each time the button is clicked, the count is decremented by 1
decreaseBtn.onclick = function () {
    count--; // Decrement the count by 1
    countLabel.textContent = count; // Update the displayed count
};

// Event handler for the "Reset" button. Each time the button is clicked, the count is reset to 0
resetBtn.onclick = function () {
    count = 0; // Reset the count to 0
    countLabel.textContent = count; // Update the displayed count
};
