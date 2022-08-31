const addButton = document.getElementById("addition");
const screen = document.getElementById("screen");
const subtractButton = document.getElementById("subtraction");



// Button handlers
addButton.addEventListener('click', () => {
    const inputValue = document.getElementById("quantity");
    const number = parseInt(inputValue.value);
    const value = parseInt(screen.innerText) + number;
    screen.innerText = value;
})


subtractButton.addEventListener('click', () => {
    const inputValue = document.getElementById("quantity");
    const number = parseInt(inputValue.value);
    const value = parseInt(screen.innerText) - number;
    screen.innerText = value;
})




