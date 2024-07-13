
//! Array different type element and not fix size
let elements = ['James', 'Daniel', 1, 2, 3, 4, true, false, 5.5]
console.log(elements);
console.log(elements.length);

console.log("=============");

let students = ["Ali", "KEMAL", "CAMAL"]
console.log(students);
console.log(students[0]);
console.log(students[1]);
students[2] = 'SEDA';
console.log(students);

console.log('=============');
//! for of loop used for jS  , for regular loop ta kullanilir
let numbers = [56,74, 89, 45, 89]
// regular loop  good to reach out element and reverse
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);   
}

//! used for ardisik value icnin , does not index number
// for (let element of sequence){
//     statement 
// }
for( let each of numbers){
    console.log(each);
}

console.log("--------------");
// push add array end
// unshift add to beginning
//splice(index, # of elements) remove specific element
//shift() remove first element of the array
//pop() removes the last elemnet of the array 
//other thank thoses you have to create your methods
let employees = [" Ali", "Bella", "Ahmet"]
employees.push('Sena');
console.log(employees);

employees.unshift("Tan");
console.log(employees);

employees.unshift("Tan");
employees.unshift("Tan");
employees.unshift("Tan");

console.log(employees);
// give index number, how many will be deleted
employees.splice(1,3);
console.log(employees);

console.log("========");

employees.shift();
console.log(employees);

employees.pop();
console.log(employees);


