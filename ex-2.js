let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
return words.filter( words => words.includes("e"));
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
