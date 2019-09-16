#!/usr/bin/env node

const prompts = require('prompts');
const notifications = require('./generator/helpers/notifications');
const checkCurrentDir = require('./generator/modules/check_current_dir');

(async () => {
	if (!await checkCurrentDir()) {
		process.exit(1);
	}

	const response = await prompts(require('./questions'));

	try {
		await require('./generator/modules/init_npm')(response.name);
		await require('./generator/modules/install_packages')(response);
		require('./generator/modules/make_project_structure')(response);
		//require('./generator/modules/сonfig_generator')(response);

		notifications.success('\nУстановка завершена');
		notifications.success(' 一 npm run build - сборка бандла');
		notifications.success(' 一 npm run serve - запуск dev-сервера и автосборки файлов по изменению');
	} catch (e) {
		notifications.error(e.message);
		process.exit(1);
	}
})();