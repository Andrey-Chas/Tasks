function countLetters() {
    var wordOrLetters = document.getElementById("x").value;
    var arr = Array.from(wordOrLetters);
    var counts = {};
    arr.forEach(function (i) {
        counts[i] = (counts[i] || 0) + 1;
    });
    console.log(counts);
}