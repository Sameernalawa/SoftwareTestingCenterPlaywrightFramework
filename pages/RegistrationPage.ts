import {Page, Locator} from '@playwright/test';

export class RegistrationPage {
    readonly page : Page;
    readonly navRegister : Locator;
    readonly fullname : Locator;
    readonly email : Locator;
    readonly phone : Locator;
    readonly Username : Locator;
    readonly Password : Locator;
    readonly ConfirmPassword : Locator;
    readonly gender : Locator;
    readonly country : Locator;
    readonly TermsConditions : Locator;
    readonly consent : Locator;
    readonly CreateButton : Locator;
    readonly RegisterSuccessMessage : Locator;

    constructor(page: Page){
        this.page = page;
        this.navRegister = page.locator("#nav-register");
        this.fullname = page.locator("#full-name");
        this.email = page.locator("//input[@type='email']");
        this.phone = page.locator("#phone");
        this.Username = page.locator("#reg-username");
        this.Password = page.locator("#reg-password");
        this.ConfirmPassword = page.locator("#confirm-password");
        this.gender = page.locator("#gender-male");
        this.country = page.locator("#country");
        this.TermsConditions = page.locator("#terms");
        this.consent = page.locator("#gdpr-consent");
        this.CreateButton = page.locator(".btn-primary");
        this.RegisterSuccessMessage = page.locator(".alert-success");
    }
    async RegNavigation(){
        await this.navRegister.click();
    }
    async FullForm(name : string,email: string,phone: string,username: string,password: string,confirmpassword: string,country: string) {
        await this.fullname.fill(name);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.ConfirmPassword.fill(confirmpassword);
        await this.gender.check();
        await this.country.selectOption(country);
        await this.TermsConditions.check();
        await this.consent.check();
        await this.CreateButton.click();
    }

}