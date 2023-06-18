let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city) {
  for (let i = 0; i < destinations.length; i++) {
    if (city == destinations[i]) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false