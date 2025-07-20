// // Generic functions and interfaces

// // without generic function

// function logString(data: string): void {
//   console.log(data);
// }

// function logNumber(data: number): void {
//   console.log(data);
// }

// function logBoolean(data: boolean): void {
//   console.log(data);
// }

// // logString("without, generic!");
// // logNumber(100);
// // logBoolean(true);

// // with generic function

// function logData<T>(data: T) {
//   console.log(data);
// }

// // logData<string>("with, generic!");
// // logData<number>(100);
// // logData<boolean>(true);

// // generic interface

// interface ApiResponse<T> {
//   success: boolean;
//   data: T;
// }

// const userResponse: ApiResponse<{
//   email: string;
//   username: string;
//   userId: number | string;
// }> = {
//   success: true,
//   data: {
//     email: "saiyamprogrammer@gmail.com",
//     username: "Saiyam Programmer",
//     userId: 1,
//   },
// };

// const productResponse: ApiResponse<{
//   id: number;
//   name: string;
//   brand: string;
//   price: number;
// }> = {
//   success: false,
//   data: {
//     id: 1,
//     name: "Iphone 16 pro",
//     brand: "Apple",
//     price: 1000,
//   },
// };

// // console.log(userResponse);
// // console.log(productResponse);

// // Constraints: To Add Rules or Limits to Generic Type Variable

// function printLength<T extends { length: number }>(data: T) {
//   console.log(data.length);
// }

// printLength("Learning, Generic!");
// printLength([1, 2, 3, 4, 5, 6, 7, 8]);

// interface HasId {
//   id: number;
// }

// function getId<T extends HasId>(data: T) {
//   console.log("Id is:", data.id);
// }

// getId({ id: 100 });
