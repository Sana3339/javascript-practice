let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let res = [];

for (prop in vehicle) {
  res.push(prop);
}

console.log(res);