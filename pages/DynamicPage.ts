import {Page , Locator} from '@playwright/test';

export class DynamicPage {

    readonly page : Page;
    readonly navTable : Locator;
    readonly SecondSalaryChangeRow : Locator;



    constructor(page: Page) {
        this.page = page;
        this.navTable = page.locator("#nav-dynamic-table");
        this.SecondSalaryChangeRow = page.locator('tr[data-testid="dynamic-row-2"]');

    }
    async DynamicMenu() {
        await this.navTable.click();
    }

    async DynamicSecondRowSalaryChange(salaryValue:string) {
        await this.SecondSalaryChangeRow.getByRole("button", { name: "Edit row"}).click();
        const SalaryEdit = this.SecondSalaryChangeRow.locator("input[data-col='salary']");
        await SalaryEdit.click();
        await SalaryEdit.fill(salaryValue);
    }


}