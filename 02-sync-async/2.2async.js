const fs = require('node:fs');
const https = require('https');

console.log("Hello World!");

var num1 = 9448;
var num2 = 3454;


// Synchronous 
const syncData = fs.readFileSync("./file.txt", "utf8");
console.log(syncData);

console.log("After readFileSync execute");

https.get('https://dummyjson.com/products/1', (res) => {
    console.log("Fetched Data Successfully!");
});

setTimeout(() => {
    console.log("setTimeout called successfully after 5 second");
}, 5000);

//Async Function
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log("file data : ", data);
})


function multiply(x, y) {
    var result = x * y;
    return result;
}

let num3 = multiply(num1, num2);

console.log("multiplicationResult is : ", num3);