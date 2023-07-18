let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No');
}

randomNumber ? console.log('Yes!') : console.log('No');