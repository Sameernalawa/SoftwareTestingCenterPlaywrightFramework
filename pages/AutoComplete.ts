import {Page , Locator} from '@playwright/test';

export class AutoComplete{
    readonly page : Page;
    readonly navAutoComplete : Locator;
    readonly countryDropdown : Locator;
    readonly MultiselectDropdown : Locator;

    constructor(page : Page){
        this.page = page;
        this.navAutoComplete = page.locator("#nav-autocomplete");
        this.countryDropdown = page.locator("#country-ac-input");
        this.MultiselectDropdown = page.locator("#tag-input");
    }

    async navigationAutoComplete(){
        await this.navAutoComplete.click();
    }
    async SelectionCountry(country : string){
        await this.countryDropdown.pressSequentially(country);
        
        const optionLocator = this.page.getByRole('option', { name: country, exact: true });
        await optionLocator.click();
    }
    async SelectMultiSelectCountry(language : string){
         await this.MultiselectDropdown.fill(language);
         await this.MultiselectDropdown.press("Enter");
         
    }

}