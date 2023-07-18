let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(string1) {
  for (let idx = 0; idx < destinations.length; idx += 1) {
    if (destinations[idx] === string1) {
      return true;
    }
  }
    return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false