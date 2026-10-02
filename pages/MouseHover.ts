import {Page, Locator} from '@playwright/test';

export class MouseHover{
    readonly page : Page
    readonly navMouse : Locator;
    readonly mousehover : Locator;

    constructor(page:Page){
        this.page = page;
        this.navMouse = page.locator("#nav-mouse-hover");
        this.mousehover = page.locator("#hover-box-1");
    }
    async navigationMouse(){
        await this.navMouse.click();
    }

    async mousehoveroption(){
        await this.mousehover.hover();
        await this.mousehover.click();
    }

}