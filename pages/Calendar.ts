import {Page,Locator} from '@playwright/test';

export class Calendar{
    readonly page : Page;
    readonly navCalendar : Locator;
    readonly nativeDate : Locator;
    readonly DateTime : Locator;

    constructor(page:Page){
        this.page = page;
        this.navCalendar = page.locator("#nav-calendar");
        this.nativeDate = page.locator("#native-date");
        this.DateTime = page.locator("#datetime-input");
    }
    async navigationCalendar(){
        await this.navCalendar.click();
    }
    async nativeDateField(date:string){
        await this.nativeDate.fill(date);
    }
    async nativeDateTime(dateTime: string){
        await this.DateTime.fill(dateTime);
    }
}