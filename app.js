function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero";
    }
}

function calculator() {
    // Get user input from the console
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));

    // Perform operations
    const sum = add(num1, num2);
    const difference = subtract(num1, num2);
    const product = multiply(num1, num2);
    const quotient = divide(num1, num2);

    // Display results in the console
    alert(`Sum: ${sum}`);
    alert(`Difference: ${difference}`);
  alert(`Product: ${product}`);
    alert(`Quotient: ${quotient}`);
}

// Run the calculator function
calculator();