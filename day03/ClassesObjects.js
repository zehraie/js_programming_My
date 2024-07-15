class Employee{
<<<<<<< HEAD
    static myStaticMethod(){

    }
    static myStaticMethod = '';
    //!Overloading yapabilmek icin default value veriyoruz
            constructor(employeeName = 'Unknown', age = 0, gender = 'Unknown', salary = 5000){
                this.employeeName = employeeName; // creating variable and , declaring variable and initialize
                this.age = age;
                this.gender =gender;
                this.salary = salary;
            }
    work(){
        console.log(`${this.employeeName} is working`);
    }
    toString(){
        return `Employee Name: ${this.employeeName}, Age: ${this.age}, Gender: ${this.gender}, Salary: ${this.salary}`;
    }
}

let employee1 = new Employee('Ali', 56, 'Female', 3000);
console.log(employee1);

let employee2 = new Employee();
console.log(employee2);

let employee3 = new Employee('Veli');
console.log(employee3);

let employee4 = new Employee('Hasan', 35);
console.log(employee4);

let employee5 = new Employee('Emre', 28, 'Male', 4500);
console.log(employee5);

employee1.work();
employee2.work();
employee3.work();
employee4.work();


=======

    constructor(employeeName, age, gender, salary){
        this.employeeName = employeeName; // creating variable and , declaring variable and initialize
        this.age = age;
        this.gender =gender;
        this.salary = salary;
    }
}
>>>>>>> cfa800f4ab3621939ca515d13011ec2fb5836255
