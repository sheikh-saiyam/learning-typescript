// TypeScript OOP: Defining classes

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, There! ${this.name} is ${this.age} years old`);
//   }
// }

// const user = new Person("Sheikh Saiyam", 16);
// user.greet();

//  modifiers (public, private, protected)

// class BankAccount {
//   public account_name: string;
//   private balance: number;
//   protected account_type: string;

//   constructor(name: string, amount: number) {
//     this.account_name = name;
//     this.balance = amount;
//     this.account_type = "Savings";
//   }

//   public showBalance() {
//     console.log("Account balance is: ", this.balance);
//   }
// }

// const account1 = new BankAccount("John", 1000);
// account1.showBalance();

// Inheritance

// class Animal {
//   constructor(public name: string) {}

//   move() {
//     console.log(`${this.name} is moving`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Gheo Gheo!");
//   }
// }

// const dog = new Dog("Yoyo");
// dog.move();
// dog.bark();

// implements

// interface Drivable {
//   start: () => void;
//   stop: () => void;
// }

// class Car implements Drivable {
//   start() {
//     console.log("Car is starting");
//   }

//   stop() {
//     console.log("Car is stopped");
//   }
// }

// const car = new Car();
// car.start();
// car.stop();
