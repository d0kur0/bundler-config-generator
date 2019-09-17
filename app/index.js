#!/usr/bin/env node

const prompts = require('prompts');
const folderAvailable = require('./functions/folderAvailable');

(async () => {
	if (!folderAvailable()) {
		const isContinue = await prompts(require('./questions/continueIsFolderNotAvailable'));

		if (!isContinue.return) {
			process.exit(1);
		}
	}

	const answers = await prompts(require('./questions/answerIndex'));

})();