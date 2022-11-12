// This function is to take words separated by dashes or underlines and change it instead over to camel cased words

function toCamelCase(str) {
	const spacing = str.replace(/-/g, " ").replace(/_/g, " ");
	const words = spacing.split(" ");
	const setWords = [words[0]];
	for (let i = 1; i < words.length; i++) {
		const capitalWord =
			words[i].charAt(0).toUpperCase() + words[i].substring(1);
		setWords.push(capitalWord);
	}
	const camelCasedWords = setWords.join("");
	return camelCasedWords;
}

console.log(toCamelCase("this-is-a-Test"));
console.log(toCamelCase("This_is_the_Second_test"));
