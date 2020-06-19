function add(n1, n2) {
    return n1 + n2;
}
var n1 = 5;
var n2 = 2.6;
console.log(add(n1, n2));
var n3 = "5";
var n4 = 2.6;
console.log(add(n3, n4));
function add1(n1, n2) {
    return n1 + n2;
}
var n5 = 5;
var n6 = 2.6;
console.log(add1(n5, n6));
function add2(n1, n2) {
    if (typeof n1 !== "number")
        throw new Error("n1 is not a number");
    if (typeof n2 !== "number")
        throw new Error("n2 is not a number");
    return n1 + n2;
}
var n7 = "5";
var n8 = 2.6;
console.log(add2(n7, n8));
