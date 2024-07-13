// Creeate and array of String and add 10 students names to it.
let students = ["Ali", "Bella", "Ahmet", "Cem", "Doris", "Eva", "Fikri", "Gul"];

//Display all students names in console. 
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}
console.log(students);
//! TRY TAB KEY TO GET AI COMPLETIONS
//set the first student name to "Zehra" in the students array.
students[0] = "Zehra";
console.log(students);
 //add a new student name "Faye" to the students array.
students.push("Faye");
console.log(students)
//set the last student name to "Gulsen" in the students array.
students[students.length - 1] = "Gulsen";
console.log(students);

console.log("---------------");
//!to trigger AI use  // for the following code

//display all students names in reverse order in console.
for(let i = students.length - 1; i >= 0; i--){
    console.log(students[i]);
}
console.log("---------------");
// change @example.com to @gmail.com in the email address.
let email = "students@gmail.com.com";

// check if the email address is contains @example.com domain.
if(email.includes("@gmail.com")){
    console.log("Email is valid.");
} else {    
     console.log("Email is not valid.");
}   
console.log("---------------");

// createe a array of integers and add 7 to it 
let numbers = [1, 2, 3, 4, 5];
numbers.push(7);
console.log(numbers);

//writ a program that can display the max and min numbers form the numbers array.
let maxNumber = numbers[0];
let minNumber = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
    if(numbers[i] < minNumber){
        minNumber = numbers[i];
    }
}
console.log("Max number: " + maxNumber);
console.log("Min number: " + minNumber);
// create unsorted array of integers with 10 elements
let unsortedNumbers = [5, 1, 7, 2, 9, 3, 6, 8, 4, 0];
console.log("Unsorted numbers: " + unsortedNumbers);

// write a program that sorts the unsortedNumbers array in ascending order.
// do not use any built in sorting functions.   
for (let i = 0; i < unsortedNumbers.length - 1; i++) {
    for (let j = 0; j < unsortedNumbers.length - i - 1; j++) {
        if (unsortedNumbers[j] > unsortedNumbers[j + 1]) {
            let temp = unsortedNumbers[j];
            unsortedNumbers[j] = unsortedNumbers[j + 1];
            unsortedNumbers[j + 1] = temp;
        }

        console.log(unsortedNumbers);
    }
}



