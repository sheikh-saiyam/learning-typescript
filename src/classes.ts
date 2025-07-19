// TypeScript OOP: Defining classes

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, There! ${this.name} is ${this.age} years old`);
  }
}

//  modifiers (public, private, protected)

class BankAccount {
  public account_name: string;
  private balance: number;
  protected account_type: string;

  constructor(name: string, amount: number) {
    this.account_name = name;
    this.balance = amount;
    this.account_type = "Savings";
  }

  public showBalance() {
    console.log("Account balance is: ", this.balance);
  }
}
