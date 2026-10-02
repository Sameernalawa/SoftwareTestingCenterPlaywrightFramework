import {Page , Locator , Download} from '@playwright/test';

export class FileDownloader{
    readonly page : Page; 
    readonly navDownload : Locator;
    readonly downloadButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.navDownload = page.locator("#nav-file-download");
        this.downloadButton= page.locator("#download-csv");

    }
    async navigationDownloadMenu(){
        await this.navDownload.click();
    }
    async DownloaderButton() : Promise<Download>{
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadButton.click();
        return await downloadPromise;
    }


}