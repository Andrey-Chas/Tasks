function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        var fizz = i % 3;
        var buzz = i % 5;
        if (fizz == 0 && buzz == 0) {
            document.write("FizzBuzz" + "<br>");
        } 
        else if (buzz == 0) {
            document.write("Buzz" + "<br>");
        }
        else if (fizz == 0) {
            document.write("Fizz" + "<br>");
        }
        else {
            document.write(i + "<br>");
        }
    }
}