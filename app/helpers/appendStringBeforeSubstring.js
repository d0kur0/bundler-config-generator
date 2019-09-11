module.exports = (string, afterString, newString) => {
	const startIndexOfAfterString = string.indexOf(afterString);

	if (startIndexOfAfterString === -1) return string;

	return string.slice(0, startIndexOfAfterString + afterString.length) + `\n${newString}` + string.slice(startIndexOfAfterString + afterString.length);
};