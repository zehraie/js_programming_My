let score = 40;

if (score >= 60) {
  // false
  console.log("Congrats!");
}

console.log("----------------------------------");

if (score >= 60) {
  console.log("Passed");
} else {
  // otherwise
  console.log("Failed");
}

console.log("----------------------------------");

let number = 100;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

console.log("----------------------------------");

let grade = 85;

let result = 'Grade: ';
//Multi-branch if statement can be used to create an else if clause
if (grade >= 90) {
  result += 'A';
} else if (grade >= 80) {
    result += 'B';
} else if (grade >= 70) {
    result += 'C';
} else if (grade >= 60) {
    result += 'D';
} else {
    result += 'F';
}


console.log(result);
 //!  Nested if statements can be used for creating a pre-condition
score = -300;
 
if (score >= 0 && score <= 100) {
  // pass or failed
  if (score >= 60) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
  
} else {
  console.log("Invalid");
}


console.log("------------")



let weight = 50;
if (weight >=90) {
    console.log(" asiri sisman")
}else if(weight >=70 && weight <= 90){
    console.log(" sisman")
}else if(weight >=60 && weight <=70  ){
    console.log("balik etli")
}else if(weight >=50 && weight <=60){
    console.log("normal")
}else {
    console.log("zayif")
}

/**
 * log yazıp Tab veya Enter'a basın:
Bu, otomatik olarak console.log() yazacaktır.
clg yazıp Tab veya Enter'a basın:
Bu da console.log() yazacaktır.
clo yazıp Tab veya Enter'a basın:
Bu, console.log('object :>> ', object); şeklinde bir çıktı verecektir.
 */
let yz = " stone"
console.log('yz :', yz); 
console.log(yz);         
