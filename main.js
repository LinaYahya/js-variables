// First Scope (function and block scope)
// var is a function scope, let and const block scope

// function newFunction() {
//     var hello = "hello";
// }
// console.log(hello);

// var greeter = "hey hi";
// var times = 4;

// if (2 > 3) {
//     var greeter = "say Hello instead";
// }
// console.log(greeter);
console.log(location.search);
// let greeting = "say Hi";
// let times = 4;
// if (times > 3) {
//     let hello = "say Hello instead";
//     console.log(hello); // "say Hello instead"
// }
// console.log(hello); // not defined

// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting);

// Declarations
// var greeter = "hey hi";
// var greeter = "say Hello instead";

// var greeter = "hey hi";
// greeter = "say Hello instead";

// let greeting = "say Hi";
// let greeting = "say Hello instead";

// let greeting = "say Hi";
// let greeting = "say Hello instead";

// const greeting = "say Hi";
//  greeting = "say Hello instead";
// console.log(greeting);

// const greeting = {
//     message: "say Hi",
//     times: 4,
// };

// greeting.message = "say Hello instead";
// greeting.age = 24;
// console.log(greeting);

// Hoisting of var
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

console.log(greeter);
var greeter = "say hello";

// Hoisting of let
// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

// const name;
// console.log(name); // Uncaught ReferenceError: name is not defined
// name = "Andrew";

// Every const declaration, therefore, must be initialized at the time of declaration.

// Hoisting of const
// Just like let, const declarations are hoisted to the top but are not initialized.

// “Temporal Dead Zone”, A time span between variable creation and its initialization where they can’t be accessed.
