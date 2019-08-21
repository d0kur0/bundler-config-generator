const prompts = require('prompts');

(async () => {
	const response = await prompts(require('./questions'));

	console.log(response);
})();
