"use strict";
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
var n5 = "5";
var n6 = 2.6;
// console.log(add1(n5, n6));
function add2(n1, n2) {
    if (typeof n1 !== "number")
        throw new Error("n1 is not a number");
    if (typeof n2 !== "number")
        throw new Error("n2 is not a number");
    return n1 + n2;
}
var n7 = "5";
var n8 = 2.6;
// console.log(add2(n7, n8));
// javascript is dynamically typed language errors are detected at runtime,
// where as typescript is staticly typed, errors are resolved during compile or development time.
//ENUM
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["SELLER"] = 5] = "SELLER";
    Role[Role["BUYER"] = 30] = "BUYER";
})(Role || (Role = {}));
console.log(Role.SELLER);
console.log(Role.ADMIN);
