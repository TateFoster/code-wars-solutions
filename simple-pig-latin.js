function pigIt(str) {
	//Code here
	let words = str.split(" ");
	const newWords = [];
	for (let word of words) {
		if (word == /[.,\/#!$%&\^\*;:{}=\-_`~()]/) {
			newWords.push(word);
		} else {
			let splitWord = word.split("");
			let moveLetter = splitWord.shift();
			splitWord.push(moveLetter);
			splitWord.push("ay");
			let newWord = splitWord.join("");
			newWords.push(newWord);
		}
	}
	return newWords.join(" ");
}

console.log(pigIt("Test the pig latin !"));

// To move the first letter of each word to the end and add "ay" to the end of the word.
