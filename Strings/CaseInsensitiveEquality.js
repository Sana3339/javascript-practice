function isSame(string1, string2) {

  return string1.toLowerCase() === string2.toLowerCase();
}


let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(isSame(string1, string2));
console.log(isSame(string1, string3));
console.log(isSame(string2, string3));