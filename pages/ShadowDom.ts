import {Page , Locator} from '@playwright/test';

export class ShadowDom {
    readonly page : Page
    readonly navShadow : Locator;
    readonly shadowUsername : Locator;
    readonly shadowPassword : Locator;
    readonly signShadowButton : Locator;
    readonly plusButton : Locator;
    readonly shadowValue : Locator;

    constructor(page:Page){
        this.page = page;
        this.navShadow = page.locator("#nav-shadow-dom");
        this.shadowUsername = page.locator("#shadow-input");
        this.shadowPassword = page.locator("#shadow-password");
        this.signShadowButton = page.getByRole("button", {name : "Sign In (Shadow)"} );
        this.plusButton = page.locator("#shadow-increment");
        this.shadowValue = page.locator("#shadow-counter-value");
    }
    async navigationShadow(){
        await this.navShadow.click();
    }
    async ShadowUsername(username : string){
        await this.shadowUsername.fill(username);
    }
    async ShadowPassword(password : string){
        await this.shadowPassword.fill(password);
    }
    async ShadowButton(){
        await this.signShadowButton.click();
    }
    async PlusButton(){
        for(let i=0; i<8; i++) {
            await this.plusButton.click();
        }
    }
    async getCounterDisplay(){
        return this.shadowValue;
    }
}