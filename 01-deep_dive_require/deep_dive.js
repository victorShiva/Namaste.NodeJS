//console.log("Hey this is js code");
var x = 100;

function outer() {
    const num1 = 20;
    console.log("outer");

    function inner() {
        const b = 40;
        console.log("Inner");
    }
}


// require('./path')
// All the code of the module is wrapped inside a function(IIFE)

// IIFE - Immediately Invoked Function Expression

(function () {

    // All Code executed immediately

})();

module.exports = {
    x, outer
}


