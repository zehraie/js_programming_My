class Person{

    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    } 
    
    eat(){
        console.log(`${this.name} is eating`);
    }

}  //! super in icnde belirt parent tan gelen parameterlari 
    class Student extends Person{
        constructor(name,age, gender, studentId){ // calling parent class constructor  with studentId as argument  - constructor chaining  (constructor chaining)
            super(name, gender, age); // inheriting properties from parent class
            this.studentId = studentId;
        }
        study(){
            console.log(`${this.name} is studying`);
        }
}

class Teacher extends Person{

    teach(){
console.log(`${this.name} is teaching`);
    }
}
// teacher and student object get constructer from parent class
let student = new Student('John Doe', 18, 'Male', 'A01');

let teacher = new Teacher('Jane Doe', 35, 'Female');

console.log(student);
console.log(teacher);

student.study();
teacher.teach();


