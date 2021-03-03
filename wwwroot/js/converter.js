function converter() {

    var number = Number(document.getElementById("number1").value);
    var resul = number * 0.54;
    var round = resul.toFixed(2);
    document.getElementById("result").innerHTML = round;

}