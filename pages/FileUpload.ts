import {Page , Locator} from '@playwright/test';

export class FileUpload{
    readonly page : Page
    readonly navUpload : Locator;
    readonly singleuploadFile : Locator;
    readonly singleuploadButton : Locator;
    readonly singlesuccessMessage : Locator;
    readonly multipleuploadFile : Locator;
    readonly multipleuploadButton : Locator;
    readonly multiplesuccessMessage : Locator;

    constructor(page:Page){
        this.page = page;
        this.navUpload = page.locator("#nav-file-upload");
        this.singleuploadFile = page.locator("//input[@name='uploadFile']");
        this.singleuploadButton = page.locator("#upload-btn");
        this.singlesuccessMessage = page.locator("#upload-success");
        this.multipleuploadFile = page.locator("//input[@name='files']");
        this.multipleuploadButton = page.locator("#multi-upload-btn");
        this.multiplesuccessMessage = page.locator("#multi-upload-success");

    }
    async singleFileUpload() {
        await this.navUpload.click();
        // Pass the relative path directly as a string from the project root
        await this.singleuploadFile.setInputFiles('test-input/dummy-50KB.pdf');
        await this.singleuploadButton.click();
    }
    async multipleFileUpload(){
         await this.multipleuploadFile.setInputFiles([
            'test-input/new pdf1.pdf',
            'test-input/new pdf2.pdf'
        ]);
        await this.multipleuploadButton.click();
    }
}