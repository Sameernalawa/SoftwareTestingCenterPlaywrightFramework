import {Page , Locator} from '@playwright/test';

export class RadioPage {

    readonly page : Page;
    readonly NavRadio : Locator;
    readonly RadioSelection : Locator;
    readonly Rating : Locator;
    readonly SubmitRatingButton : Locator;
    readonly RatingResult : Locator;

    constructor(page: Page) {
        this.page = page;
        this.NavRadio = page.locator("#nav-radio-buttons");
        this.RadioSelection = page.locator("#radio-cherry");
        this.Rating = page.locator("#rating-4");
        this.SubmitRatingButton = page.getByText("Submit Rating");
        this.RatingResult = page.locator("#rating-result");

    }
    async RadioNavigation() {
        await this.NavRadio.click();
    }
    async RadioCherry() {
        await this.RadioSelection.check();
    }
    async RatingCheck(){
        await this.Rating.check();
    }
    async RatingSubmit(){
        await this.SubmitRatingButton.click();
    }
}