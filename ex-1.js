let words = ["hello", "world"];

function getWordLengths(words) {
  return words.map(count => count.length)
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
