// any vs unknown data types in typescript
//   any are flexible than unknown (for stricted)

let userInput: unknown;
userInput = "string";

let userInputAny: any;
userInputAny = "string";
let username: string;
//username=userInput;// this is an error
username = userInputAny; // this is error free

//  if we want to assign unknown to string casting
if (typeof userInput === "string") {
  username = userInput;
}

//  NEVER, this function never produce return function
function generateError(message: string, code: number): never {
  console.log("generate function");
  throw { message: message, errorCode: code };
}
generateError("Error has occured!", 500);
console.log(generateError("Error has occured!", 500));

// //  A function returning 'never' cannot have a reachable end
// function add(n1: number, n2: number):never {
//    n1 + n2;
// }
