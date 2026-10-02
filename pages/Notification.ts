import {Page , Locator} from '@playwright/test';

export class Notification {
    readonly page : Page;
    readonly navNotification : Locator;
    readonly successToastButton :  Locator;
    readonly successToastMessage : Locator;

    constructor(page:Page){
        this.page = page;
        this.navNotification = page.locator("#nav-notifications");
        this.successToastButton = page.locator("#btn-success-toast");
        this.successToastMessage = page.locator("#toast-container");
    }
    async NotificationNav(){
        await this.navNotification.click();
    }
    async successButton(){
        await this.successToastButton.click();
    }
}