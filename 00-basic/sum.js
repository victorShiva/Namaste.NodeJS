// Modules protect their variables and functions from leaking


console.log("Sum module access");

export var num = 100;
//z = 300;

export function calculateSum(a, b) {
    let sum = a + b;

    console.log(sum);
}

//module.exports = calculateSum;

//module.exports = {
//    calculateSum, num
//}