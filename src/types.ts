// Union, Intersection and Literal types and Type narrowing and Type guards: typeof, in operator and instanceof

// Union type

type ProductId = string | number;
type UserId = string | number;

function getProduct(id: ProductId) {
  console.log(`Fetching product based on id: ${id} || type: ${typeof id}`);
}

// getProduct("1");
// getProduct(2);

// Intersection type

type UserType = {
  id: UserId;
  username: string;
  email: string;
};

type isAdmin = {
  isAdmin: boolean;
};

type AdminUser = UserType & isAdmin;

const admin: AdminUser = {
  id: 1,
  username: "Admin",
  email: "admin@gmail.com",
  isAdmin: true,
};

// Literal type

type Action = "start" | "pause" | "stop" | "submit" | "reset";

function handleAction(action: Action) {
  console.log(`Action: ${action}`);
}

// handleAction("pause");

//  Type narrowing

function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// log("hello, world!");
// log(1234.239);

function processInput(value: string | number) {
  if (typeof value === "number") {
    console.log("Parsed as number: ", value * 2);
  } else {
    console.log("Parsed as string: ", value.trim());
  }
}

// processInput(10);
// processInput("     Hello, world!     ");

// Type guards: typeof, in operator and instanceof

// typeof Type guards

function display(value: string | number) {
  if (typeof value === "string") {
    console.log("It's a string value: ", value.toUpperCase());
  } else {
    console.log("It's a number value: ", value.toFixed(2));
  }
}

// display("learning typescript!");
// display(9840.40875);

// in operator type guards

type Car = {
  drive: () => void;
};

type Boat = {
  sail: () => void;
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

const car: Car = {
  drive() {
    console.log("Car is driving!");
  },
};

const boat: Boat = {
  sail() {
    console.log("boat is sailing!");
  },
};

// move(boat);
// move(car);

// instanceof type guards

class Dog {
  bark() {
    console.log("Gheo Gheo!");
  }
}

class Cat {
  meow() {
    console.log("Meow Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog = new Dog();
const cat = new Cat();

// makeSound(dog);
// makeSound(cat);
