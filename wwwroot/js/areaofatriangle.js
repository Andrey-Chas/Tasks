function areaOfATriangle(a, b, c) {
    var s = ((a + b + c) / 2);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

document.getElementById("result").innerHTML = areaOfATriangle(5, 6, 7);