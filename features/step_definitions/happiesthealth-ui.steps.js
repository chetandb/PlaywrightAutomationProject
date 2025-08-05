import { actorCalled, engage } from '@serenity-js/core';
import { BrowseTheWeb, PageElement, By, Navigate } from '@serenity-js/playwright';
import { Ensure, includes, isVisible } from '@serenity-js/assertions';
import { chromium } from 'playwright';
import { Given, Then } from '@cucumber/cucumber';

let browser, actor;

Given('I open the Happiest Health homepage', async function () {
    if (!browser) browser = await chromium.launch({ headless: true });
    engage(new BrowseTheWeb(browser));
    actor = actorCalled('User');
    await actor.attemptsTo(
        Navigate.to('https://www.happiesthealth.com/')
    );
});

Then('the page title should contain {string}', async function (expected) {
    await actor.attemptsTo(
        Ensure.that(PageElement.located(By.css('title')), isVisible()),
        Ensure.that(async () => (await this.page.title()), includes(expected))
    );
});

Then('I should see the main navigation', async function () {
    await actor.attemptsTo(
        Ensure.that(PageElement.located(By.css('nav')), isVisible())
    );
});

Then('I should see a link to {string}', async function (linkText) {
    await actor.attemptsTo(
        Ensure.that(PageElement.located(By.css(`a:has-text("${linkText}")`)), isVisible())
    );
});

Then('I should see at least one featured image', async function () {
    await actor.attemptsTo(
        Ensure.that(PageElement.located(By.css('img')), isVisible())
    );
});
