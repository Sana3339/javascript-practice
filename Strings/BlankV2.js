function isBlank(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      return false;
    }
  }
  return true;
}
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true
