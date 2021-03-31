function findLargestNumber() {
    var num1 = Number(document.getElementById("a").value);
    var num2 = Number(document.getElementById("b").value);

    if (num1 > num2) {
        document.getElementById("result").innerHTML = "Largest number is " + num1;
    }
    else {
        document.getElementById("result").innerHTML = "Largest number is " + num2;
    }
}