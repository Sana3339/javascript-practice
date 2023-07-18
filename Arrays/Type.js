
function filter(input) {

  for (let idx = 0; idx < input.length; idx += 1) {
    if (Array.isArray(input[idx])) {
      return true
    }
  }
  return false;
}

console.log(filter([1, 2, [1, 2]]));