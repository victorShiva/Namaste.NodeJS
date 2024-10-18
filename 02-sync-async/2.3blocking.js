const crypto = require("node:crypto");
//const crypto = require('crypto');
console.log("Hello World!");

var num1 = 9448;
var num2 = 3454;


//pbkdf2 - Password Base Key Deravtive Function

//synchronous function - Will Block The Main Thread - Don't use it 
const secretKey = crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");           //50000
console.log("FirstKey is generated!");
console.log(secretKey.toString('utf8', 0, 8));

//Async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated!");
    console.log(key.toString('hex'));
});


function multiply(x, y) {
    var result = x * y;
    return result;
}

let num3 = multiply(num1, num2);

console.log("multiplicationResult is : ", num3);