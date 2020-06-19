"use strict";
//  union type functionality
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number")
        result = n1 + n2;
    else
        result = "" + n1 + n2;
    return result;
}
var combinedAges = combine(20, 45);
console.log(combinedAges);
var combineNames = combine("gebrehiywet", "fissaha");
console.log(combineNames);
