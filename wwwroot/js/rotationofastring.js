var str = "w3resource ";
var arr = [];
for (var index in str) {
    arr.push(str[index])
}

var moving = setInterval(moveStr, 500);

function moveStr() {
    var letterMove = arr[10];
    arr.pop();
    arr.unshift(letterMove);
    document.getElementById("result").innerHTML = arr.join("");
}