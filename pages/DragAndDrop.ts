import {Page, Locator} from '@playwright/test'

export class DragAndDrop {
    readonly page : Page ;
    readonly navDragDrop : Locator;
    readonly sourceElement : Locator;
    readonly targetElement : Locator;


    constructor(page: Page){
        this.page = page;
        this.navDragDrop = page.locator("#nav-drag-drop");
        this.sourceElement = page.locator("//div[@data-id='3']");
        this.targetElement = page.locator("#col-inprogress");

    }
    async DragDropNav(){
        await this.navDragDrop.click();
        
    }
   
}