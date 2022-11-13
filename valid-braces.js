function validBraces(braces) {
	//TODO
}

console.log(validBraces("()") + " () This should be true");
console.log(validBraces("{}") + " {} this should be true");
console.log(validBraces("[]") + " [] this should be true");
console.log(validBraces("())") + " ()) this should be false");
console.log(validBraces("({})") + " ({}) this should be true");
console.log(validBraces("({)") + " ({) this should be false");
