//! first step : Export it manually under the function you want
//! second step : import it , eger ayni package da ise tek ./ ile cagir
//! eger farkli package da ise ../ ile istegimiz function cagiriyoruz

const utilities = require('./Utility')  //* gosteriyor class i 
 const test = require('../day01/Test');
console.log(utilities.cube(3));
console.log(utilities.cube(5));

console.log(test.calculate(10,20,'+'));