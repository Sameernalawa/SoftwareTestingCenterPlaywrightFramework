import {Page , Locator} from '@playwright/test';

export class FormValidation {
        readonly page : Page;
        readonly navFormValidation : Locator;
        readonly Firstname : Locator;
        readonly Lastname : Locator;
        readonly email : Locator;
        readonly age : Locator;
        readonly url : Locator;
        readonly uniqueMessage : Locator;
        readonly dropdown : Locator;
        readonly submitButton : Locator;
        readonly SuccessMessage : Locator;


    constructor(page : Page) {
        this.page = page;
        this.navFormValidation = page.locator("#nav-form-validation");
        this.Firstname = page.getByPlaceholder("First name");
        this.Lastname = page.getByPlaceholder("Last name");
        this.email = page.getByPlaceholder("you@example.com");
        this.age = page.locator("#v-age");
        this.url = page.locator("#v-url");
        this.uniqueMessage = page.getByPlaceholder("Your message…");
        this.dropdown = page.locator("#v-priority");
        this.submitButton = page.locator("#form-submit-btn");
        this.SuccessMessage = page.locator(".alert-success");

    }
    async NavigationFormValidation() {
        await this.navFormValidation.click();
    }
    async FillForm(firstname : string, lastname : string, email : string, age : string, url : string, uniquemessage : string, dropdown : string) {
        await this.Firstname.fill(firstname);
        await this.Lastname.fill(lastname);
        await this.email.fill(email);
        await this.age.fill(age);
        await this.url.fill(url);
        await this.uniqueMessage.fill(uniquemessage);
        await this.dropdown.selectOption(dropdown);
        await this.submitButton.click();
        
    }
}