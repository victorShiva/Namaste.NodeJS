//require('./xyz.js'); /// one module into another
//import { userId, greeting, obj } from './xyz.js';



//const calculateSum = require('./sum.js');
const { calculateSum, num } = require('./sum');
const data = require('./data.json');

const { Multiplycation, kind, divide, subtraction } = require('./calculate');

// ------------------ util module ----------------
const Util = require('node:util');
console.log(Util);


var user = "Sample_name";
var num1 = 10;
var num2 = 20;

//console.log(num1 + num2);
//console.log(user);



//console.log(global);
//console.log(globalThis);

console.log(num);
calculateSum(23, 12);

console.log(globalThis === global);

//console.log(this);            //// {} Empty Object


Multiplycation(20, 8);
divide(45, 6);
console.log(kind);
subtraction(67, 87);
console.log(data);




// ++++++++++++++++++++++++ using ES module ++++++++++++++++++

//console.log(userId);
//greeting();
//obj.findName();