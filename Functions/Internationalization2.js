function extractLanguage(str) {
  return str.substring(0,2);
}

function extractRegion(str) {
  return str.substring(3,5);
}

function greet(language) {
  switch(language) {
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'en': return 'Hi!';
  }
}

function localGreet(string) {
  let language = extractLanguage(string);
  let region = extractRegion(string);
  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'