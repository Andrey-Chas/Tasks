function calcCircleArea(r) {
    return Math.PI * r * r;
}

document.getElementById("AreaOfCircle").innerHTML = calcCircleArea(7);
document.getElementById("AreaOfCircle1").innerHTML = calcCircleArea(1.5);
document.getElementById("AreaOfCircle2").innerHTML = calcCircleArea(20);