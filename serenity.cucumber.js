import { Serenity } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';

export default {
    defaultTimeout: 30000,
    require: [
        'features/step_definitions/**/*.js',
    ],
    format: [
        '@serenity-js/cucumber',
        'progress',
    ],
    parallel: 1,
    worldParameters: {
        serenity: new Serenity().addReporter(new ConsoleReporter()),
    },
};
