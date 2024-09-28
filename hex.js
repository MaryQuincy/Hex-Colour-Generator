// document.getElementById('generateButton').addEventListener('click', function() {
//     const randomColour = generateRandomHexColour();
//     const colourDisplay = document.getElementById('colourDisplay');
//     colourDisplay.textContent = randomColour;
//     colourDisplay.style.backgroundColour = randomColour;
// });

document.getElementById('generateButton').addEventListener('click', function() {
    const randomColour = generateRandomHexColour();
    const container = document.querySelector('.container');
    const colourDisplay = document.getElementById('colourDisplay');
    colourDisplay.textContent = randomColour;
    container.style.backgroundColor = randomColour;
    });

function generateRandomHexColour() {
    const letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}
