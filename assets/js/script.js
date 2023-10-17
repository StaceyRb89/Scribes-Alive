// Get references to the input elements and the calculate button
const rateInput = document.getElementById("rate");
const durationInput = document.getElementById("duration");
const calculateButton = document.getElementById("calculateButton");
const totalOutput = document.getElementById("total");

// Add a click event listener to the Calculate button
calculateButton.addEventListener("click", calculateTotalCost);

// Function to calculate the total cost
function calculateTotalCost() {
    const rate = parseFloat(rateInput.value);
    const duration = parseFloat(durationInput.value);

    if (isNaN(rate) || isNaN(duration)) {
        alert("Please enter valid numbers.");
    } else {
        const totalCost = rate * duration;
        totalOutput.value = "€" + totalCost.toFixed(2);
    }

}

// modal
