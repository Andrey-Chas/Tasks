function reverseANumber() {
    var x = document.getElementById("x").value;
    var arr = Array.from(x);
    arr.reverse();
    document.getElementById("result").innerHTML = arr.join("");
}