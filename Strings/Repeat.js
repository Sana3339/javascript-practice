function repeat(num, str) {
  for (let idx = 0; idx < num; idx += 1) {
    console.log(str);
  }
}

console.log(repeat(3, 'ha')); // 'hahaha'