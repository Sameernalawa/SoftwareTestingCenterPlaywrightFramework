import {Page , Locator} from '@playwright/test';

export class JsPrompt{
    readonly page : Page
    readonly navjsPrompt : Locator;
    readonly triggerPromtButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.navjsPrompt  = page.locator("#nav-js-prompt");
        this.triggerPromtButton = page.locator("#trigger-prompt-btn");

    }
    async navigationjsprompt(){
        await this.navjsPrompt.click();
    }

    async triggerOption(){
        this.page.once('dialog', async dialog => {
        console.log(`promplt text: ${dialog.message()}`);
        await dialog.accept('pratik pratik pratik pratikpratik pratik pratik');
    });
    await this.triggerPromtButton.click();
    }
}