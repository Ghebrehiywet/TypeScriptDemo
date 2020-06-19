//  function return type
function add1(n1: number, n2: number): number {
  return n1 + n2;
}

// no return type or void
function printResult1(num: number): void {
  console.log("Result:" + num);
  return; //return is optional
}

//    undefined return type
function printResult2(num: number): undefined {
  console.log("Result:" + num);
  return; //return is must
}

// function type variable
let copy: Function;
copy = add1;
copy = printResult2; //cant differentiate which function to use
copy(12, 23);

//arrow function
let copy2: (a: number, b: number) => number;
copy2 = add1;
//copy2 = printResult1;
// this will complain b/c signiture is not the same as the defined one
copy2(12, 23);

// implementing callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const sum = n1 + n2;
  cb(sum);
}

addAndHandle(23, 45, (num) => {
  console.log(num);
});


