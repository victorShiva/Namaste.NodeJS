console.time('Execution Time');
console.log("Hello World!");

var num1 = 9448;
var num2 = 3454;

function multiply(x, y) {
    var result = x * y;
    return result;
}

let num3 = multiply(num1, num2);

console.log("multiplicationResult is : ", num3);

console.timeEnd('Execution Time');