import {Page , Locator} from '@playwright/test';

export class Checkboxes {
    readonly page : Page
    readonly navPage : Locator;
    readonly checkbox1 : Locator;
    readonly checkbox2 : Locator;
    readonly checkbox3 : Locator;
    readonly checkbox4 : Locator;
    readonly subscribeButton : Locator;

    constructor(page:Page) {
        this.page = page;
        this.navPage = page.locator("#nav-checkboxes");
        this.checkbox1 = page.locator("//input[@data-testid='chk-1']");
        this.checkbox2 = page.locator("#chk-js");
        this.checkbox3 = page.locator("#perm-write");
        this.checkbox4 = page.locator("#topic-finance");
        this.subscribeButton = page.locator("#subscribe-btn");
    }
    async CheckboxNavigation(){
        await this.navPage.click();
    }
    async checkbox1Selection() {
        await this.checkbox1.check();
    }
    async checkbox2Selection() {
        await this.checkbox2.check();
    }
    async checkbox3Selection() {
        await this.checkbox3.check();
    }
    async checkbox4Selection() {
        await this.checkbox4.check();
    }
    async subscribeButtonSelection() {
        await this.subscribeButton.click();
    }

}