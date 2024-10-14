const crypto = require("node:crypto");

console.log("Hello World!");

var num1 = 9448;
var num2 = 3454;


//pbkdf2 - Password Base Key Deravtive Function

//synchronous function - Will Block The Main Thread - Don't use it 
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("FirstKey is generated!");

//Async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated!");
});


function multiply(x, y) {
    var result = x * y;
    return result;
}

let num3 = multiply(num1, num2);

console.log("multiplicationResult is : ", num3);