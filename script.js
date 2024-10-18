// Function to generate a random HEX color
function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}

// Function to update the background and display the color value
function flipColor() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('color-value').textContent = newColor;
}

// Add event listener to the button to trigger the color change
document.getElementById('color-button').addEventListener('click', flipColor);
