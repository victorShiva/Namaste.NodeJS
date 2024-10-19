const fs = require('node:fs');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then((val) => console.log(val));

fs.readFile('./file.txt', 'utf8', () => {

    setTimeout(() => console.log("2nd Timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CB");

});
process.nextTick(() => console.log("nextTick"));

console.log("Last line of File");


/*
Last line of File
nextTick
Promise
Timer Expired
setImmediate
File Reading CB
2nd nextTick
2nd setImmediate
2nd Timer
*/