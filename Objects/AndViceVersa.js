let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let array = nestedArray[i];
  person[array[0]] = array[1];
}

console.log(person);