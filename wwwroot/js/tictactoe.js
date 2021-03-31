var winpos = ["c1", "c2", "c3"];
var winpos1 = ["c4", "c5", "c6"];
var winpos2 = ["c7", "c8", "c9"];
var winpos3 = ["c1", "c4", "c7"];
var winpos4 = ["c2", "c5", "c8"];
var winpos5 = ["c3", "c6", "c9"];
var winpos6 = ["c1", "c5", "c9"];
var winpos7 = ["c7", "c5", "c3"];

var drawX = "X";
var drawO = "O";

var Xpos = [];
var Opos = [];

var chosen = "X";

function count1() {

    for (i = 0; i > 3; i++) {
        document.getElementById("winner").innerHTML = "It's a tie";
    }

}

function ticTacToe1() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c1").innerHTML = drawX;
        Xpos.push("c1");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c1");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c1").innerHTML = drawO;
        Opos.push("c1");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c1");
        element.onclick = "";

    }

}

function ticTacToe2() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c2").innerHTML = drawX;
        Xpos.push("c2");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c2");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c2").innerHTML = drawO;
        Opos.push("c2");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c2");
        element.onclick = "";

    }

}

function ticTacToe3() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c3").innerHTML = drawX;
        Xpos.push("c3");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c3");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c3").innerHTML = drawO;
        Opos.push("c3");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c3");
        element.onclick = "";

    }

}

function ticTacToe4() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c4").innerHTML = drawX;
        Xpos.push("c4");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c4");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c4").innerHTML = drawO;
        Opos.push("c4");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c4");
        element.onclick = "";

    }

}

function ticTacToe5() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c5").innerHTML = drawX;
        Xpos.push("c5");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c5");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c5").innerHTML = drawO;
        Opos.push("c5");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c5");
        element.onclick = "";

    }

}

function ticTacToe6() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c6").innerHTML = drawX;
        Xpos.push("c6");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c6");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c6").innerHTML = drawO;
        Opos.push("c6");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c6");
        element.onclick = "";
    }

}

function ticTacToe7() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c7").innerHTML = drawX;
        Xpos.push("c7");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c7");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c7").innerHTML = drawO;
        Opos.push("c7");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c7");
        element.onclick = "";

    }

}

function ticTacToe8() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c8").innerHTML = drawX;
        Xpos.push("c8");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c8");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c8").innerHTML = drawO;
        Opos.push("c8");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c8");
        element.onclick = "";

    }

}

function ticTacToe9() {

    if (chosen == "X") {

        chosen = "O";

        document.getElementById("c9").innerHTML = drawX;
        Xpos.push("c9");
        Xpos.sort();
        console.log(Xpos);

        var element = document.getElementById("c9");
        element.onclick = "";

    }
    else {

        chosen = "X";

        document.getElementById("c9").innerHTML = drawO;
        Opos.push("c9");
        Opos.sort();
        console.log(Opos);

        var element = document.getElementById("c9");
        element.onclick = "";

    }

}

if (Opos.join() == winpos) {
    document.getElementById("winner").innerHTML = "The winner is O";
}

if (Xpos.join() == winpos) {
    document.getElementById("winner").innerHTML = "The winner is X";
}