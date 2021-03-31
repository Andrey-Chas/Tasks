function sort() {
    var wordOrLetters = document.getElementById("wordOrLetters").value;
    var arr = Array.from(wordOrLetters);
    arr.sort();
    document.getElementById("result").innerHTML = arr.join("");
}