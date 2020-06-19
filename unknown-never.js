"use strict";
// any vs unknown data types in typescript
//   any are flexible than unknown (for stricted)
var userInput;
userInput = "string";
var userInputAny;
userInputAny = "string";
var username;
//username=userInput;// this is an error
username = userInputAny; // this is error free
//  if we want to assign unknown to string casting
if (typeof userInput === "string") {
    username = userInput;
}
//  NEVER, this function never produce return function
function generateError(message, code) {
    console.log("generate function");
    throw { message: message, errorCode: code };
}
generateError("Error has occured!", 500);
console.log(generateError("Error has occured!", 500));
// //  A function returning 'never' cannot have a reachable end
// function add(n1: number, n2: number):never {
//    n1 + n2;
// }
