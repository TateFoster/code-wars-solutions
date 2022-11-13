function validBraces(braces) {
	const parenthisCount = braces.match(
		/\b(\([a-zA-Z0-9\+-_\{\}\(\)\\\/,.;:'"\[\]]*\))\b/g
	);
	return parenthisCount;
}

console.log(validBraces("()") + " () This should be true");
console.log(validBraces("{}") + " {} this should be true");
console.log(validBraces("[]") + " [] this should be true");
console.log(validBraces("())") + " ()) this should be false");
console.log(validBraces("({})") + " ({}) this should be true");
console.log(validBraces("({)") + " ({) this should be false");
