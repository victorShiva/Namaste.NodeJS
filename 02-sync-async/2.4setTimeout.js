const crypto = require("crypto")
console.log("Hello World!");

var num1 = 9448;
var num2 = 3454;

//pbkdf2 - Password Base Key Deravtive Function

//synchronous function - Will Block The Main Thread - Don't use it 
console.log("======");
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("FirstKey is generated!");


// This callback will only be pushed to call stack in v8 once the call stack is empty.
setTimeout(() => {
    console.log("call me right now!");
}, 0);   // It will only be called once call stack of main thread is empty.

setTimeout(() => {
    console.log("call me after 3 second");
}, 3000);

function multiply(x, y) {
    var result = x * y;
    return result;
}

let num3 = multiply(num1, num2);

console.log("multiplicationResult is : ", num3);