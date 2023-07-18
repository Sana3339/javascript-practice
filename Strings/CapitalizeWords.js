function capitalize(str1) {

  let wordList = str1.split(' ');
  let res = [];

  for (let idx = 0; idx < wordList.length; idx += 1) {
    let firstLetter = wordList[idx][0].toUpperCase();
    let word = firstLetter + wordList[idx].slice(1);
    res.push(word);

  }
  return res.join(' ');
}

str1 = 'launch school tech & talk';

console.log(capitalize(str1))
