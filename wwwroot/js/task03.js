function getRandomColor() {

    var colors = ["blue", "green", "red", "yellow", "pink", "orange"];

    colors.sort(function (a, b) { return 0.5 - Math.random() });
    document.getElementById("cell1").style.backgroundColor = colors[0];
    
}

function getRandomColor1() {

    var colors = ["blue", "green", "red", "yellow", "pink", "orange"];

    colors.sort(function (a, b) { return 0.5 - Math.random() });
    document.getElementById("cell2").style.backgroundColor = colors[0];

}

function getRandomColor2() {

    var colors = ["blue", "green", "red", "yellow", "pink", "orange"];

    colors.sort(function (a, b) { return 0.5 - Math.random() });
    document.getElementById("cell3").style.backgroundColor = colors[0];

}