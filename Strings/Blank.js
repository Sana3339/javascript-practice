function isBlank(string1) {
 return (string1.length === 0);
}


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true