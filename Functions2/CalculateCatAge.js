function catAge(years) {
  let catAge = 0;
  if (years >= 1) {
    catAge += 15;
    years -=1;
  }

  if (years >= 1) {
    catAge += 9;
    years -=1;
  }

  while (years > 0) {
    catAge += 4;
    years--;
  }

  return catAge;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32