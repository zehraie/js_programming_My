let school = 'CYDEO';
console.log(school);

/*
let school = 'MIT';
console.log(school);

Variable name can not be duplicated
*/

/*
if(true){
    let a = 200;
}

console.log(a);
 Can be used as local variable of a block
*/


console.log('--------------------------------------------------------');

var country = 'Japan'

var country = 'Korea'; // var: variable name can be duplicated during the declaration

console.log(country);


if(true){
    var a = 200;
}

console.log(a); // var: can NEVER be local variable

//1
//! Recap  let and var difference
// JavaScript'te let ve var arasında önemli farklar vardır. Bu farkları örneklerle açıklayalım:
// Kapsam (Scope) Farkı:
// var: Fonksiyon kapsamlıdır veya global kapsamlıdır.
// let: Blok kapsamlıdır.

function scopeExample() {
    if (true) {
        var varVariable = "I'm var";
        let letVariable = "I'm let";
    }
    console.log(varVariable);  // "I'm var"
   // console.log(letVariable);  // ReferenceError: letVariable is not defined
}
scopeExample();

//!2
// Hoisting (Yukarı Çekme):
// var: Değişken tanımlamaları yukarı çekilir (hoisted), ancak atamalar çekilmez.
// let: Yukarı çekilmez.

console.log(varVariable);  // undefined
//console.log(letVariable);  // ReferenceError: Cannot access 'letVariable' before initialization

var varVariable = "I'm var";
let letVariable = "I'm let";

//! 3 
// Yeniden Tanımlama:
// var: Aynı kapsamda yeniden tanımlanabilir.
// let: Aynı kapsamda yeniden tanımlanamaz.

var x = 1;
var x = 2;  // Geçerli

let y = 1;
//let y = 2;  // SyntaxError: Identifier 'y' has already been declared

//!4
// Global Nesne Özelliği:
// var: Global kapsamda tanımlandığında, global nesnenin (örneğin, tarayıcıda window) bir özelliği olur.
// let: Global kapsamda tanımlansa bile global nesnenin bir özelliği olmaz.
var globalVar = "I'm global var";
let globalLet = "I'm global let";

console.log(window.globalVar);  // "I'm global var"
console.log(window.globalLet);  // undefined

//!5
// Döngülerde Davranış:
// var ile döngü değişkeni, döngü dışında da erişilebilir olur.
// let ile döngü değişkeni, sadece döngü içinde erişilebilir.
for (var i = 0; i < 3; i++) {
    // döngü içi
}
console.log(i);  // 3

for (let j = 0; j < 3; j++) {
    // döngü içi
}
//console.log(j);  // ReferenceError: j is not defined