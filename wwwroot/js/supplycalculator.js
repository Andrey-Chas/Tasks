function calcSupply(age, maxAge, food, foodPerDay) {

    var age = Number(document.getElementById("age").value);
    var maxAge = Number(document.getElementById("maxAge").value);
    var food = document.getElementById("food").value;
    var foodPerDay = Number(document.getElementById("foodPerDay").value);

    var calculation = (maxAge - age) * foodPerDay * 365;
    document.getElementById("result").innerHTML = calculation + "kg of " + food + " will be eaten until " + maxAge + " years.";

}