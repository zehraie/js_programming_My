/**
 * create a custom class for Product with the following properties:
 * Attributes:
 * name , price, quantity, description, productId, 
 actions
 constructor to initialize the attributes
 displayProductInfo : to display the product information (name,)

 * 
 */
class Product {
    constructor(name, price, quantity, description, productId) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productId = productId;
    }

    displayProductInfo() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.productId}`);
    }
}
// test the product object
let product1 = new Product('Apple', 1.5, 100, 'Red Delicious apple', 'P001');
product1.displayProductInfo();

let product2 = new Product('Banana', 0.7, 50, 'Yellow banana', 'P002');
product2.displayProductInfo();  

console.log(product1.price);


console.log('-------------');
/*
Create a class for Animal with the following properties:
Attributes:
name, age, breed, gender
Actions:
Constructor to initialize the attributes
eat : to display the message "Eating..."
sleep : to display the message "Sleeping..."
*/
class Animal {
    constructor(name, age, breed, gender) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }

    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
}

/* create follwing child classes of Animal with additional properties and methods
Dog class 
Additional Actions:
bark : to display the message "Woof!"

Cat class:
Additional Actions:
meow : to display the message "Meow!"
*/

class Dog extends Animal {
    constructor(name, age, breed, gender, color) {
        super(name, age, breed, gender);
        this.color = color;
    }

    bark() {
        console.log(`${this.name} is barking... Woof!`);
    }  
}

class Cat extends Animal {
    meow()
    {
        console.log(`${this.name} is meowing... Meow!`);
    }
}

// create instances of Dog and Cat classes
let dog1 = new Dog('Buddy', 3, 'Labrador', 'Male', 'Brown');
dog1.eat();
dog1.sleep();
dog1.bark();

let cat1 = new Cat('Whiskers', 2, 'Persian', 'Female', 'White');
cat1.eat();