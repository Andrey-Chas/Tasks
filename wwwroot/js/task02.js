function arithmetic() {

    var obj = document.getElementById("options").value;

    var a = Number(document.getElementById("a1").value);
    var b = Number(document.getElementById("b1").value);

    if (obj == "add") {
        document.getElementById("result").innerHTML = a + b;
    }

    else if (obj == "sub") {
        document.getElementById("result").innerHTML = a - b;
    }

    else if (obj == "mul") {
        document.getElementById("result").innerHTML = a * b;
    }

    else if (obj == "div") {
        document.getElementById("result").innerHTML = a / b;
    }

}