import { Page, Locator, BrowserContext } from '@playwright/test';

export class MultipleWindows {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly navMultipleWindows: Locator;
    readonly triggerNewWindowBtn: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        
        // Main page locators
        this.navMultipleWindows = page.locator("#nav-multiple-windows");
        // Using native test-id locator strategy instead of rigid XPath
        this.triggerNewWindowBtn = page.getByTestId("open-new-window-btn");
    }
    async navigateToMultipleWindows() {
        await this.navMultipleWindows.click();
    }

    /**
     * Triggers and handles switching to a newly opened browser window.
     * @returns The newly spawned Page object context
     */
    async openAndCaptureNewWindow(): Promise<Page> {
        // Run the listener and the trigger event concurrently using Promise.all
        const [newWindow] = await Promise.all([
            this.context.waitForEvent('page'),
            this.triggerNewWindowBtn.click()
        ]);
        
        // Wait for the new window to be completely ready for manipulation
        await newWindow.waitForLoadState();
        return newWindow;
    }

    /**
     * Performs target interactions inside the newly opened window profile
     * @param targetPage The captured Page instance of the new window
     * @param textToFill The string input value to type
     */
    async interactWithNewWindow(targetPage: Page, textToFill: string) {
        // Define dynamic locators scoped directly to the new window context
        const windowInput = targetPage.locator("#new-window-input");
        const closeBtn = targetPage.locator("#new-window-close-btn");

        await windowInput.fill(textToFill);
        await closeBtn.click();
    }
}