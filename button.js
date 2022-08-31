const addButton = document.getElementById("addition");
const screen = document.getElementById("screen");
const subtractButton = document.getElementById("subtraction");



// Button handlers
addButton.addEventListener('click', () => {
    const value = parseInt(screen.innerText) + 1;
    screen.innerText = value;
})


subtractButton.addEventListener('click', () => {
    const value = parseInt(screen.innerText) - 1;
    screen.innerText = value;
})




