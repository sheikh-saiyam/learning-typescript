// Vehicle Management System - Project

interface Vehicle {
  brand: string;
  speed: number;
  move(): void;
}

class Car implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  move() {
    console.log(`${this.brand} is moving on speed ${this.speed} km/h`);
  }
}

const car = new Car("Tesla", 180);
car.move();

class ElectricCar extends Car {
  charge() {
    console.log(`${this.brand} is charging`);
  }
}

const electricCar = new ElectricCar("Tesla", 180);
electricCar.charge();
