function notRepeatedCharacter() {
    var wordOrLetters = document.getElementById("x").value;
    var arr = Array.from(wordOrLetters);
    var result = "";
    var ctr = 0;

    for (var x = 0; x < arr.length; x++) {
        ctr = 0;

        for (var y = 0; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arr[x];
            break;
        }
    }
    document.getElementById("result").innerHTML = result;
}