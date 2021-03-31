const x = 3;
const y = 4;

var openedImg = 0;
var firstImgValue = 0;

var moves = 0;
var scores = 0;
var moves1 = 0;
var scores1 = 0;

var playerNumber = "p1";

var onePlayer = document.getElementById("playerOne");
var twoPlayers = document.getElementById("playerTwo");

const playground = generatePlayground(x, y);
populatePlayground(x, y);

function generatePlayground(a, b) {
    let arr = [];

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = [];
        }
    }

    return arr;
}

function populatePlayground(a, b) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            let number;
            do {
                number = getRandomInt(x * y / 2) + 1;
            } while (!checkCardsNumber(number));

            playground[i][j] = number;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function checkCardsNumber(number) {
    counter = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (playground[i][j] == number) {
                counter++
            } 
        }
    }

    if (counter >= 2) {
        return false;
    }
    return true;
}

$(document).ready(function () {
    $(".center,.mainTitle").slideDown(5000);
    $("#playerOne").click(function () {
        $(".center,.mainTitle").slideUp(1000, openGame);
    });
});

var openGame = function () {
    $(document).ready(function () {
        $("#game").show(2000);
    });

    $(document).ready(function () {
        $(".board,.move").show(2000);
    });
}

function closeAllImg() {
    firstImgValue = 0;
    $("img").attr("src", "images/coverImg.jpg");
    $("img").attr("selected", false);
    $("img").removeClass("flip");
}

$(document).ready(function () {
    $("img").click(function () {
        if ($(this).attr("selected")) {
            return;
        }

        if (playerNumber == "p1") {

            if (openedImg >= 2) {
                moves = moves + 1;
                document.getElementById("resultMove").innerHTML = moves;
                closeAllImg();
                openedImg = 0;
                playerNumber = "p2";
                return;
            }
        }

        if (playerNumber == "p2") {

            if (openedImg >= 2) {
                moves1 = moves1 + 1;
                document.getElementById("resultMove1").innerHTML = moves1;
                closeAllImg();
                openedImg = 0;
                playerNumber = "p1";
                return;
            }
        }

        openedImg++;

        $(this).hide();
        $(this).addClass("flip");

        let x = $(this).data("x");
        let y = $(this).data("y");

        if (playerNumber == "p1") {
            if (firstImgValue == 0) {
                firstImgValue = playground[x][y];

                $(this).attr("selected", true);
            }
            else if (firstImgValue == playground[x][y]) {
                $(this).attr("selected", true);

                setTimeout(() => {
                    $("img[selected='selected']").fadeOut(300, function () {
                        $("img[selected='selected']").remove();
                    });

                    moves = moves + 1;
                    document.getElementById("resultMove").innerHTML = moves;
                    openedImg = 0;
                    firstImgValue = 0;
                    scores++;
                    $("#resultScore").text(scores);
                }, 500);

            }
        }

        if (playerNumber == "p2") {
            if (firstImgValue == 0) {
                firstImgValue = playground[x][y];

                $(this).attr("selected", true);
            }
            else if (firstImgValue == playground[x][y]) {
                $(this).attr("selected", true);

                setTimeout(() => {
                    $("img[selected='selected']").fadeOut(300, function () {
                        $("img[selected='selected']").remove();
                    });

                    moves1 = moves1 + 1;
                    document.getElementById("resultMove1").innerHTML = moves1;
                    openedImg = 0;
                    firstImgValue = 0;
                    scores1++;
                    $("#resultScore1").text(scores1);
                }, 500);

            }
        }

        

        $(this).attr("src", "images/img" + playground[x][y] + ".jpg");
        $(this).show();
    });
});
