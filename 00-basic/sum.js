// Modules protect their variables and functions from leaking


console.log("Sum module access");

setTimeout(() => {
    console.log("After 2 second executed");
}, 2000)

var num = 100;
z = 300;

function calculateSum(a, b) {
    let sum = a + b;

    console.log(sum);
}
//calculateSum(3, 5);

console.log(module.exports);                // { } empty object

// ------------------------------- commonjs -------------------

//exports.id = 200;
//exports.user = "joker";
//module.exports.id = 200;
//module.exports.user = "joker";
//console.log(module.exports);



//module.exports = calculateSum;            // only one variable exports
//console.log(module.exports);

module.exports = {
    calculateSum, num, z
}

console.log(module.exports);