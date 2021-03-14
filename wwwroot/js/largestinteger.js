function findLargestInt() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    document.getElementById("result").innerHTML = Math.max(a, b, c);
}