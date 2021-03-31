var arr = [25, 50, 93, 157, 175];

function sumOfTheArray (total, num) {
    return total + num;
}

console.log("The sum of the array is " + arr.reduce(sumOfTheArray));

function productOfTheArray (total, num) {
    return total * num;
}

console.log("The product of the array is " + arr.reduce(productOfTheArray));