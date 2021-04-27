let cards1 = ["<img alt='img1' src='images/img1.jpg' />", "<img alt='img2' src='images/img2.jpg' />", "<img alt='img3' src='images/img3.jpg' />", "<img alt='img4' src='images/img4.jpg' />", "<img alt='img5' src='images/img5.jpg' />", "<img alt='img6' src='images/img6.jpg' />",
    "<img alt='img1' src='images/img1.jpg' />", "<img alt='img2' src='images/img2.jpg' />", "<img alt='img3' src='images/img3.jpg' />", "<img alt='img4' src='images/img4.jpg' />", "<img alt='img5' src='images/img5.jpg' />", "<img alt='img6' src='images/img6.jpg' />"]

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");


var board = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];
var openedCards = [];
var htmlTag = [];
var coverImg = [];

var moves = 0;
var scores = 0;
var moves1 = 0;
var scores1 = 0;

var count = 0;

var twoPlayerMode = false;

var playerCount2Mode = 1;


//main

$(document).ready(function () {
    $("#p1").click(function () {
        $("#main").slideUp(1000, function () {
            gameForOneAndTwo();
            $("#boardGame").slideDown(1000);
        });
    });
    $("#p2").click(function () {
        $("#main").slideUp(1000, function () {
            gameForOneAndTwo();
            twoPlayerMode = true;
            $("#onePlayer").addClass("changePlayerColour");
            $("#boardGame").slideDown(1000, function () {
                $("#secondPlayer").slideDown(1000)
            });
        });
    });
});

function gameForOneAndTwo() {
    createBoard();
}

function createBoard() {
    for (i = cards1.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = cards1[i]
        cards1[i] = cards1[j]
        cards1[j] = k
    }
    console.log(cards1);
    console.log(board);

    for (i = 0; i < cards1.length; i++) {
        board[i].innerHTML = cards1[i]
    }

};

function flip() {
    $(document).ready(function () {
        $("#a1").hide(50);
        $("#b1").show(50);
        openedCards.push(document.getElementById("b1").firstChild.alt);
        coverImg.push(document.getElementById("a1"));
        htmlTag.push(document.getElementById("b1"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip1() {
    $(document).ready(function () {
        $("#a2").hide(50);
        $("#b2").show(50);
        openedCards.push(document.getElementById("b2").firstChild.alt);
        coverImg.push(document.getElementById("a2"));
        htmlTag.push(document.getElementById("b2"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip2() {
    $(document).ready(function () {
        $("#a3").hide(50);
        $("#b3").show(50);
        openedCards.push(document.getElementById("b3").firstChild.alt);
        coverImg.push(document.getElementById("a3"));
        htmlTag.push(document.getElementById("b3"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip3() {
    $(document).ready(function () {
        $("#a4").hide(50);
        $("#b4").show(50);
        openedCards.push(document.getElementById("b4").firstChild.alt);
        coverImg.push(document.getElementById("a4"));
        htmlTag.push(document.getElementById("b4"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip4() {
    $(document).ready(function () {
        $("#a5").hide(50);
        $("#b5").show(50);
        openedCards.push(document.getElementById("b5").firstChild.alt);
        coverImg.push(document.getElementById("a5"));
        htmlTag.push(document.getElementById("b5"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip5() {
    $(document).ready(function () {
        $("#a6").hide(50);
        $("#b6").show(50);
        openedCards.push(document.getElementById("b6").firstChild.alt);
        coverImg.push(document.getElementById("a6"));
        htmlTag.push(document.getElementById("b6"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip6() {
    $(document).ready(function () {
        $("#a7").hide(50);
        $("#b7").show(50);
        openedCards.push(document.getElementById("b7").firstChild.alt);
        coverImg.push(document.getElementById("a7"));
        htmlTag.push(document.getElementById("b7"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip7() {
    $(document).ready(function () {
        $("#a8").hide(50);
        $("#b8").show(50);
        openedCards.push(document.getElementById("b8").firstChild.alt);
        coverImg.push(document.getElementById("a8"));
        htmlTag.push(document.getElementById("b8"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip8() {
    $(document).ready(function () {
        $("#a9").hide(50);
        $("#b9").show(50);
        openedCards.push(document.getElementById("b9").firstChild.alt);
        coverImg.push(document.getElementById("a9"));
        htmlTag.push(document.getElementById("b9"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip9() {
    $(document).ready(function () {
        $("#a10").hide(50);
        $("#b10").show(50);
        openedCards.push(document.getElementById("b10").firstChild.alt);
        coverImg.push(document.getElementById("a10"));
        htmlTag.push(document.getElementById("b10"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip10() {
    $(document).ready(function () {
        $("#a11").hide(50);
        $("#b11").show(50);
        openedCards.push(document.getElementById("b11").firstChild.alt);
        coverImg.push(document.getElementById("a11"));
        htmlTag.push(document.getElementById("b11"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}

function flip11() {
    $(document).ready(function () {
        $("#a12").hide(50);
        $("#b12").show(50);
        openedCards.push(document.getElementById("b12").firstChild.alt);
        coverImg.push(document.getElementById("a12"));
        htmlTag.push(document.getElementById("b12"));
        count++;
        if (count == 2) {
            if (openedCards[0] == openedCards[1]) {
                $("img").addClass("click1");
                $("#match").fadeIn(1000);
                $("#match").fadeOut(1000);
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                    scores++;
                    $("#score").html(scores);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        scores++;
                        $("#score").html(scores);
                    }
                    if (playerCount2Mode == 2) {
                        moves1++;
                        $("#move1").html(moves1);
                        scores1++;
                        $("#score1").html(scores1);
                    }
                }
                openedCards.shift();
                openedCards.shift();
                coverImg.shift();
                coverImg.shift();
                var toRemove = htmlTag;
                $(toRemove).fadeOut(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    if (scores == 6 || scores + scores1 == 6) {
                        message();
                    }
                    $("img").removeClass("click1");
                });
            }
            if (openedCards[0] != openedCards[1]) {
                $("img").addClass("click1");
                count = 0;
                if (twoPlayerMode == false) {
                    moves++;
                    $("#move").html(moves);
                }
                if (twoPlayerMode == true) {
                    if (playerCount2Mode == 1) {
                        moves++;
                        $("#move").html(moves);
                        playerCount2Mode = 2;
                        $("#onePlayer").removeClass("changePlayerColour");
                        $("#twoPlayer").addClass("changePlayerColour");
                    }
                    else {
                        moves1++;
                        $("#move1").html(moves1);
                        playerCount2Mode = 1;
                        $("#twoPlayer").removeClass("changePlayerColour");
                        $("#onePlayer").addClass("changePlayerColour");
                    }
                }
                openedCards.shift();
                openedCards.shift();
                $(htmlTag).hide(1000);
                $(coverImg).show(1000, function () {
                    htmlTag.shift();
                    htmlTag.shift();
                    coverImg.shift();
                    coverImg.shift();
                    $("img").removeClass("click1");
                });
            }
        }
    });
}


function message() {
    if (twoPlayerMode == false) {
        $("#boardGame").slideUp(1000);
        setTimeout(function () {
            document.getElementById("message").innerHTML = "You have completed the game in " + moves + " moves and earned " + scores + " scores!";
            $("#congratulations").slideDown(1000);
        }, 1000);
    }
    if (twoPlayerMode == true) {
        $("#boardGame").slideUp(1000);
        setTimeout(function () {
            if (scores > scores1) {
                document.getElementById("winner").innerHTML = "The winner is Player 1!";
            }
            if (scores1 > scores) {
                document.getElementById("winner").innerHTML = "The winner is Player 2!";
            }
            if (scores == scores1) {
                document.getElementById("winner").innerHTML = "It's a draw!";
            }
            document.getElementById("message1Line1").innerHTML = "Player 1 has completed the game in " + moves + " moves and earned " + scores + " scores!";
            document.getElementById("message1Line2").innerHTML = "Player 2 has completed the game in " + moves1 + " moves and earned " + scores1 + " scores!";
            $("#congratulationsForTwo").slideDown(1000);
        }, 1000);
    }
}

function reload() {
    location.reload();
}