// TypeScript Enums: Numeric and string enums and Const enums and Use-cases

// Numeric enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
let dir2: Direction = Direction.Down;
let dir3: Direction = Direction.Left;
let dir4: Direction = Direction.Right;

// console.log({ dir, dir2, dir3, dir4 });

// string emums

enum Status {
  Success = "Payment successfull!",
  Pending = "Payment pending...",
  Error = "Error on payment",
}

// const enum

const enum Size { sm, md, lg, xl }
