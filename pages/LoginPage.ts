import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly navLogin : Locator;
    readonly username : Locator;
    readonly password : Locator;
    readonly SignIn : Locator;
    readonly LoginMessage : Locator;


    constructor(page: Page){
        this.page = page;
        this.navLogin = page.locator("#nav-login");
        this.username = page.getByLabel("Username");
        this.password = page.getByLabel("Password");
        this.SignIn = page.getByRole("button", {name: " Sign In"});
        this.LoginMessage = page.locator("#login-message span");

        }
    async LoginMenu() {
        await this.navLogin.click();
    }
    async LoginCred(username : string, password : string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.SignIn.click();
    }
}