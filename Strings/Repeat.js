function repeat(times, str) {

  res = ""
  for (let i = 0; i < times; i++) {
    res = res+str;
  }
  return res;
}

console.log(repeat(3, 'ha')); // 'hahaha'