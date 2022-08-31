const addButton = document.getElementById("addition");
const screen = document.getElementById("screen");
const subtractButton = document.getElementById("subtraction");



// button handler function

function clicked(press) {
    const inputValue = document.getElementById("quantity");
    const number = parseInt(inputValue.value);
    if (press === 'add') {
        const value = parseInt(screen.innerText) + number;
        screen.innerText = value;
    } else {
        const value = parseInt(screen.innerText) - number;
        screen.innerText = value;
    }

    // screen.innerText = value;
}

// Button handlers
addButton.addEventListener('click', () => {
    clicked('add');
});


subtractButton.addEventListener('click', () => {
    clicked();
    // const inputValue = document.getElementById("quantity");
    // const number = parseInt(inputValue.value);
    // const value = parseInt(screen.innerText) - number;
    // screen.innerText = value;
})




