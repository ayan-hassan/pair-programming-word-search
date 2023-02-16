/* For this challenge, you'll be implementing a word search solver, as a function that
receives a 2D array of letters and a word. The function must:

    * Check to find the word horizontally and vertically
    * Return true if the word is found, and return false if the word is not found */


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i]).join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;