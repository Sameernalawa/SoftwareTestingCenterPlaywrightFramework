import {Page , Locator, FrameLocator} from '@playwright/test';

export class Iframe{
    readonly page : Page;
    readonly navIframe : Locator;
    readonly frame : FrameLocator;
    readonly name : Locator;
    readonly email : Locator;
    readonly dropdown : Locator;
    readonly submit : Locator;
    readonly successMessage : Locator;

    constructor(page:Page){
        this.page = page;
        this.navIframe = page.locator("#nav-iframe");
        this.frame = page.frameLocator("#internal-iframe");
        this.name = this.frame.locator("#iframe-name-input");
        this.email = this.frame.getByPlaceholder("jane@example.com");
        this.dropdown = this.frame.locator("#iframe-role-select");
        this.submit = this.frame.getByRole('button', {name: 'Submit'});
        this.successMessage = this.frame.locator("#iframe-output");

    }
    async navigationFrame(){
        await this.navIframe.click();
    }

    async fillForm(name:string, email:string, dropdownRole:string){
        await this.name.fill(name);
        await this.email.fill(email);
        await this.dropdown.selectOption(dropdownRole);
        await this.submit.click();
    }

}