function validBraces(braces) {
	const parenthisCount = braces.match(
		/\([a-zA-Z0-9\+-_\{\}\(\)\\\/,.;:'"\[\]]*\)/g
	);
	return parenthisCount;
}

console.log(validBraces("()") + " () This should be true");
console.log(validBraces("{}") + " {} this should be true");
console.log(validBraces("[]") + " [] this should be true");
console.log(validBraces("())") + " ()) this should be false");
console.log(validBraces("({})") + " ({}) this should be true");
console.log(validBraces("({)") + " ({) this should be false");
