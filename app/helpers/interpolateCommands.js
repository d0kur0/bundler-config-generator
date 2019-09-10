const appendStringBeforeSubstring = require('./appendStringBeforeSubstring');

module.exports = (sourceString, commandsObject) => {

	for (let keyOfCommand in commandsObject) {
		if (commandsObject.hasOwnProperty(keyOfCommand)) {
			const command = commandsObject[keyOfCommand]
					.filter(c => c.length)
					.join('\n');

			if (command.length) {
				sourceString = appendStringBeforeSubstring(
						sourceString,
						keyOfCommand,
						command
				);
			}
		}
	}

	return sourceString;
};