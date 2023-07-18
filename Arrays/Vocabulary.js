let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...
for (let idx = 0; idx < vocabulary.length; idx += 1) {
  for (let ydx = 0; ydx < vocabulary[0].length; ydx += 1) {
    console.log(vocabulary[idx][ydx]);
  }
}