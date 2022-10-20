function reverseWords(str) {
	const words = str.split(" ");
	const newWords = [];
	for (let word of words) {
		const newWord = word.split("").reverse().join("");
		newWords.push(newWord);
	}
	return newWords.join(" ");
}

console.log(reverseWords("a b c"));
