let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let res = [];

for (prop in person) {
  let temp = [prop, person[prop]];
  res.push(temp);
}

console.log(res);