function equality(str1, str2) {
  return (str1.toLowerCase() === str2.toLowerCase());
}
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(equality(string1, string2));
console.log(equality(string2, string3));
console.log(equality(string1, string3));