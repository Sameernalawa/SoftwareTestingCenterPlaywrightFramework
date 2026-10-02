import { Page, Locator, BrowserContext } from '@playwright/test';

export class NewTab {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly navMultipleWindows: Locator;
    readonly openTabButton: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;

        // Locators belonging strictly to the primary main page profile
        this.navMultipleWindows = page.locator("#nav-multiple-windows");
        this.openTabButton = page.locator("#open-new-tab-btn");
    }
    async navigateToMultipleWindowsPage() {
        await this.navMultipleWindows.click();
    }

    /**
     * Initializes a context listener and triggers the creation of a new browser tab.
     * @returns The newly isolated tab Page instance
     */
    async openAndCaptureNewTab(): Promise<Page> {
        // 1. Set up the browser context listener promise first
        const newTabPromise = this.context.waitForEvent('page');

        // 2. Fire the user interaction action that opens the tab
        await this.openTabButton.click();

        // 3. Resolve the promise tracking the page and wait for full structural load state
        const newTab = await newTabPromise;
        await newTab.waitForLoadState();

        return newTab;
    }

    /**
     * Executes input handling actions targeted directly inside the newly opened tab boundary.
     * @param targetTab The captured sub-tab Page instance
     * @param phrase text string to input into the target field
     */
    async interactInsideNewTab(targetTab: Page, phrase: string) {
        // Initialize functional element handles scoped strictly to the sub-tab context
        const inputField = targetTab.locator("#new-window-input");
        const closeTabBtn = targetTab.locator("#new-window-close-btn");

        await inputField.fill(phrase);
        await closeTabBtn.click();
    }
}