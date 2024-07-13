//! first step : Export it manually
//! second step : import it , if you 
//! you will see mjs extentiom : modular js
function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}
//module.export = square  // if it is only one 
module.exports = {
    square, cube
}