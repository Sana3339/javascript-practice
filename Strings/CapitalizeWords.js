
let string = 'launch school tech & talk';

function capitalizedWords(string) {
  wordList = string.split(' ');
  let capitalizedWords = [];

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizedWords.join(' ');
}

console.log(capitalizedWords(string));