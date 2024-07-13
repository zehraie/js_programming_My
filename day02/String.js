let schoolName = 'CYDEO SCHOOL';
console.log(schoolName.length-1);
//! String sequences of characters, specific elemente index number ile ulasabilirsin 
console.log(schoolName[0]);
console.log(schoolName[11]);

console.log("--------------");

schoolName = schoolName.toLowerCase();  // 'cydeo school'
console.log(schoolName);

schoolName = schoolName.toUpperCase();  // 'cydeo school'
console.log(schoolName);   //! DO NOT FORGET parantez for the medhods

console.log("--------------");

let expectedText = 'JavaScript';
let actualText = 'javascript';

console.log(expectedText.toLowerCase()===actualText.toLowerCase());

console.log(expectedText);
console.log(actualText);
console.log("=======================");

//! replace only first one not like other language, ask AI for solution
let s = 'Python Python'
// s = s.replace('Python', 'JavaScript');
//! REGULAR EXPRESSION
s = s.replace(/Python/g, 'JavaScript'); // g means global flag, REGULAR EXPRESSION 
console.log(s);
console.log("--------------");

// do same replacing all the digits with empty string 
let str = '24347AJDHYUD8R74548DJD8R7RUR' // REPLACE ALL THE DIGIT , ASK AI 
str = str.replace(/\d/g,'')       // d means digit

console.log(str);

console.log("--------------");

let word = 'JavaScript'
for (let i = 0; i < word.length; i++) {
console.log(word[i]);   // or you can use char() 
}

console.log("--------------");

let email = 'cydeoschool@yahoo.com'; // get domain
let domain = email.substring(email.indexOf('@')+1,email.lastIndexOf('.'));
console.log(domain);

console.log("--------------");
// ${} mutlaka `` kullan

let employeeName = 'Breanna';
let employeeAge = 35;
console.log( 'Employee Name: '+ employeeName );
console.log( 'Employee Age: '+ employeeAge);

console.log(`My name is ${employeeName}, and I am ${ employeeAge} yearsl old`);
//!  backtick code need to be used instead of '' or ""


