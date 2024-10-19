const fs = require('node:fs');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);
//setTimeout(() => console.log("Timer Expired"), 1000);

Promise.resolve("Promise").then((val) => console.log(val));

fs.readFile('./file.txt', 'utf8', () => {
    console.log("File Reading CB");
})

process.nextTick(() => {
    process.nextTick(() => console.log(" inner nextTick"));
    console.log("nextTick");
});

console.log("Last line of the file.");

/*
* Last line of the File.
* nextTick
* inner nextTick
* Promise
* Timer Expired
* setImmediate
* File Reading CB
*/