//a=100
//last line of file
//Process.nextTick
//Promise
//Timer Expired
//setImmediate
//File Reading CB


const fs = require('node:fs');
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then((val) => console.log(val));

fs.readFile('./file.txt', 'utf8', () => {
    console.log("File Reading CB");
})

setTimeout(() => console.log("Timer Expired"), 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
    console.log("a= ", a);
}

printA();
console.log("Last line of File");