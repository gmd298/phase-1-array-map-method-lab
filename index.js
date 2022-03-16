const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((phrase) => {
    const words = phrase.split(" ");
    const capPhrase = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const answer = capPhrase.join(" ");
    return answer;
  })
}

titleCased();


// const titleCased = tutorials.map(()) => {
//   let separateWord = tutorials.toLowerCase().split(' ');
//   for (var i = 0; i < separateWord.length; i++) {
//      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
//      separateWord[i].substring(1);
//   }
//   return separateWord.join(' ');
// }


// function titleCased(tutorials) {
//   let separateWord = tutorials.toLowerCase().split(' ');
//   for (var i = 0; i < separateWord.length; i++) {
//      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
//      separateWord[i].substring(1);
//   }
//   return separateWord.join(' ');
// }