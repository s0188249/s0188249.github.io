document.getElementById("bCalc").addEventListener("click", function () {
    const quantity = document.getElementById("itemCount").value;
    const pricePerUnit = document.getElementById("itemPrice").value;
    const output = document.getElementById("outputResult");
    const totalCost = quantity * pricePerUnit;

    const quantityPattern = /^[1-9][0-9]*$/;
    if (quantityPattern.test(quantity)) {
        output.textContent = "Общая стоимость: " + totalCost;
        output.style.opacity = "1";
        output.style.backgroundColor = "";
        output.style.color = "black";
    } else {
        output.textContent = "Введите корректное количество!";
        output.style.opacity = "1";
        output.style.backgroundColor = "red";
        output.style.color = "white";
    }
});
