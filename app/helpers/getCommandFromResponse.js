module.exports = (response, forKey, commandName) => {
	const command = response.hasOwnProperty(forKey) && response[forKey].hasOwnProperty(commandName)
			? response[forKey][commandName]
			: '';

	return [
		...[command],
		...response.plugins.filter(p => p.for === forKey).map(p => p[commandName])
	];
};