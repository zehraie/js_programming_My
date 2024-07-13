function greetings(){
    console.log('Hello Programmers');
    console.log('Hello Cydeo');
    console.log('Hello World');
}
greetings();
greetings();
greetings();
console.log(" MIssion completed");

console.log("============");

function displayValue(value = 'Unknown Value'){  //!Default value initiaize 
    console.log(`The value is ${value}`);
}

displayValue(100    );
displayValue('JavaScript')
displayValue('Hey you')
displayValue()

console.log("============");

function square(number){
    result = number * number;
    return result;      
}

let num = square(10);
console.log(num);



