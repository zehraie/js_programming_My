function calculate(num1, num2, operator){
if (operator === '-'){
    return num1-num2;
}else if(operator === '+'){
    return num1 + num2;
}else if( operator === '*'){
    return num1 * num2
}else if( operator === '/'){
    num1/num2
}else 
console.log('invalid operator');
return 0;
}

module.exports = {calculate}