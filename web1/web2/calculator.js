document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const calculateButton = document.getElementById("calculate");
    const resultParagraph = document.getElementById("result");

    calculateButton.addEventListener("click", function(event) {
        event.preventDefault(); // Add this line
    
        const quantity = parseInt(quantityInput.value, 10);
        const product = productSelect.value;
        const price = getPrice(product);
    
        if (!isValidInput(quantityInput.value)) {
            resultParagraph.textContent = "Ошибка: недопустимые символы в поле количества";
            return;
        }
    
        const cost = calculateCost(quantity, price);
        resultParagraph.textContent = `Стоимость заказа: ${cost} руб.`;
    });
    
});

function getPrice(product) {
    switch (product) {
        case "product1":
            return 100;
        case "product2":
            return 200;
        case "product3":
            return 300;
        default:
            return 0;
    }
}

function calculateCost(quantity, price) {
    return quantity * price;
}

function isValidInput(input) {
    input = input.trim();
    const regex = /^\d+$/;
    return input !== "" && regex.test(input);
}
