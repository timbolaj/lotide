
//The function should take in a sentence (as a string) and then
//return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating
//that L appears twice, and H once. {L: 2, H: 1}

const countLetters = function(str) {
  let countDisplay = {};
  for (let letter of str) {
    if (countDisplay[letter]) {
      countDisplay[letter] += 1;
    } else {
      countDisplay[letter] = 1;
    }
  }
  return countDisplay;
};

module.exports = countLetters;