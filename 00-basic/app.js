//require('./index.js'); /// one module into another

//const calculateSum = require('./sum.js');
//const { calculateSum, num } = require('./sum.js');

import { calculateSum, num } from './sum.js';


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
