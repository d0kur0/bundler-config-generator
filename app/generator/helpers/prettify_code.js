const prettier = require("prettier");

module.exports = function (source) {
	return prettier.format(source, {
		semi: false,
		parser: "babel"
	});
};