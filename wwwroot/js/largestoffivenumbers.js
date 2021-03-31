function findLargestFromSomeNumbers() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var num4 = Number(document.getElementById("num4").value);
    var num5 = Number(document.getElementById("num5").value);

    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        alert("Largest number is " + num1)
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        alert("Largest number is " + num2)
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        alert("Largest number is " + num3)
    }
    else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
        alert("Largest number is " + num4)
    }
    else {
        alert("Largest number is " + num5)
    }
}