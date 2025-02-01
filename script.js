const rollFirstButton = document.getElementById("rollFirst");

rollFirstButton.addEventListener("click", function () {
    // Disable the button immediately to prevent multiple clicks
    rollFirstButton.disabled = true;

    for (let i = 1; i <= 3; i++) { // Change to 3 to ensure there are 3 dice results
        // Generate three random dice values
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const dice3 = Math.floor(Math.random() * 6) + 1; // Adding a third dice

        // Create dice images
        const diceImage1 = `<img src="images/${dice1}.png" alt="Dice ${dice1}">`;
        const diceImage2 = `<img src="images/${dice2}.png" alt="Dice ${dice2}">`;
        const diceImage3 = `<img src="images/${dice3}.png" alt="Dice ${dice3}">`; // Adding third dice image

        // Update UI only if the elements exist
        const diceImagesContainer = document.getElementById(`diceImages${i}`);
        const diceResultElement = document.getElementById(`diceResult${i}`);

        if (diceImagesContainer && diceResultElement) {
            diceImagesContainer.innerHTML = diceImage1 + diceImage2 + diceImage3; // Combine all three dice images
            diceResultElement.innerHTML = `Dice: ${dice1}, ${dice2}, ${dice3}<br>Sum: ${dice1 + dice2 + dice3}`; // Update the sum with three dice
        }
    }

    // Re-enable the button after a short delay
    setTimeout(() => {
        rollFirstButton.disabled = false;
    }, 1000);
});
