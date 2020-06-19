//  type alience
type Combinable = number | string;

//  union type functionality
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") result = n1 + n2;
  else result = "" + n1 + n2;
  return result;
}

const combinedAges = combine(20, 45);
console.log(combinedAges);

const combineNames = combine("gebrehiywet", "fissaha");
console.log(combineNames);
