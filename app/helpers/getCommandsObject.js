const getCommandFromResponse = require('./getCommandFromResponse');

module.exports = (response) => {
	return {
		'//{CSS_BEFORE_COMMAND}': getCommandFromResponse(response, 'styles', 'beforeCommand'),
		'//{CSS_PIPE_COMMAND}':   getCommandFromResponse(response, 'styles', 'pipeCommand'),

		'//{HTML_BEFORE_COMMAND}': getCommandFromResponse(response, 'html', 'beforeCommand'),
		'//{HTML_PIPE_COMMAND}':   getCommandFromResponse(response, 'html', 'pipeCommand'),

		'//{JS_BEFORE_COMMAND}': getCommandFromResponse(response, 'js', 'beforeCommand'),
		'//{JS_PIPE_COMMAND}':   getCommandFromResponse(response, 'js', 'pipeCommand')
	};
};