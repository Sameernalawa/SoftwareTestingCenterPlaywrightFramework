import {Page, Locator, Dialog} from '@playwright/test';

export class JsAlert {
    readonly page : Page;
    readonly navjsAlert : Locator;
    readonly triggerAlertButton : Locator;
    readonly triggerDelayedAlertButton : Locator;


    constructor(page:Page){
        this.page = page;
        this.navjsAlert = page.locator("#nav-js-alert");
        this.triggerAlertButton = page.locator("#trigger-alert-btn");
        this.triggerDelayedAlertButton = page.locator("#trigger-delayed-alert");
    }
    async navigationJsAlert(){
        await this.navjsAlert.click();
    }
    async triggerButton(){
        this.page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.triggerAlertButton.click();
    }
    async triggerDelayButton() : Promise<Dialog>{
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.triggerDelayedAlertButton.click();
        return dialogPromise;
    }



}