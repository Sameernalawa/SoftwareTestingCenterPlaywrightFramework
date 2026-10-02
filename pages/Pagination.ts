
import {Page, Locator} from '@playwright/test';

export class Pagination {

    readonly page : Page;
    readonly navPage : Locator;
    readonly PageRow : Locator;

    constructor(page:Page) {
        this.page = page;
        this.navPage = page.locator("#nav-pagination-table");
        this.PageRow = page.locator("tr[data-testid='pagination-row']");
    }
    async navPagination() {
        await this.navPage.click();
    }

    async PaginationRow(){
        const paginationRow = this.PageRow.filter({has: this.page.getByText('Mechanical Keyboard')});
        const PricePrint = paginationRow.locator("td").nth(3);
        const Price = await PricePrint.innerText();
        return Price;
    }

}