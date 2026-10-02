import {Page , Locator} from '@playwright/test'

export class JsConfirm{
    readonly page : Page
    readonly navConfirm : Locator;
    readonly triggerButton : Locator;

    constructor(page:Page){
        this.page = page
        this.navConfirm = page.locator("#nav-js-confirm");
        this.triggerButton = page.locator("//button[@data-testid='trigger-confirm-btn']");
    }
    async navigationJsConfirm(){
        await this.navConfirm.click();
        this.page.once('dialog', async dialogPopUp => {
        console.log(`Confirmation text ok: ${dialogPopUp.message()}`);
        await dialogPopUp.dismiss(); // Clicks "dismiss"
        });
        await this.triggerButton.click();

    }

}