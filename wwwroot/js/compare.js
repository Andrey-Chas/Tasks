function computeNumbers(numberA, numberB, operation) {

    var operation = document.getElementById("operation").value;

    var numberA = Number(document.getElementById("numberA").value);
    var numberB = Number(document.getElementById("numberB").value);

    if (operation == "sum") {
        document.getElementById("result").innerHTML = numberA + numberB;
    }

    if (operation == "mul") {
        document.getElementById("result").innerHTML = numberA * numberB;
    }

    if (operation == "min") {
        document.getElementById("result").innerHTML = Math.min(numberA, numberB);
    }

    if (operation == "max") {
        document.getElementById("result").innerHTML = Math.max(numberA, numberB);
    }
}