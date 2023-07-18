let scores = [96, 47, 113, 89, 100, 102];

let res = 0;

for (let idx = 0; idx < scores.length; idx += 1) {
  if (scores[idx] >= 100) {
    res += 1;
  }
}

console.log(res);