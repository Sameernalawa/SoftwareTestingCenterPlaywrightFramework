import { test , expect } from '../fixtures/pageFixture';

const uniqueMessage = `Apple banana cherry date elderberry fig grape honeydew kiwi lemon 
mango nectarine orange papaya quince raspberry strawberry tangerine uva watermelon`;

// 1. test.describe groups your 21 tests into one logical container suite
test.describe("Practice Sandbox Application Automation Suite", () => {

    // This runs fresh before every single test case 
    test.beforeEach(async ({ page }) => {
        
        // Navigates directly to the baseURL specified in playwright.config.ts
        await page.goto('/'); 
    });

    // This runs right after each individual test finishes execution
    test.afterEach(async ({ page }, testInfo) => {
        // Logs a clean summary trace of your test results to the execution terminal
        console.log(`⏹️ Test [${testInfo.title}] finished with status: ${testInfo.status?.toUpperCase()}`);
    });
//Login test
test("Login Test", async ({loginPage, testData: {loginData}}) => {
    await expect(loginPage.page).toHaveTitle(new RegExp(loginData.expectedTitle));
    await loginPage.LoginMenu();
    await loginPage.LoginCred(loginData.username,loginData.password);
    await expect(loginPage.LoginMessage).toContainText(loginData.successMessage);
    console.log("Login Successful Message:", await loginPage.LoginMessage.textContent());
    
});
    // //RegisterPage
test("Registration page", async ({registrationPage, testData: {registrationData}}) => {
    await registrationPage.RegNavigation();
    await registrationPage.FullForm(registrationData.name,registrationData.email,registrationData.phone,registrationData.username,registrationData.password,registrationData.confirmPassword,registrationData.country);
    await expect(registrationPage.RegisterSuccessMessage).toContainText(registrationData.successMessage);
    console.log("Register success Message:", await registrationPage.RegisterSuccessMessage.textContent());
    
});
    //dynamic table
test("Dynamic table", async ({dynamicPage, testData: {dynamicTableData}}) => {
    await dynamicPage.DynamicMenu();
    await dynamicPage.DynamicSecondRowSalaryChange(dynamicTableData.salary);
});
    //Pagination table
test("Pagination table", async ({paginationPage}) => {
    await paginationPage.navPagination();
    const ActualPrice = await paginationPage.PaginationRow();
    console.log(`this product mechanical keyboard Price is: ${ActualPrice}`);
});
    // //Radio Buttons
test("Radio Buttons", async ({radioPage}) => {
    await radioPage.RadioNavigation();
    await radioPage.RadioCherry();
    await radioPage.RatingCheck();
    await radioPage.RatingSubmit();
    await expect(radioPage.RatingResult).toContainText("Rating submitted!");
});
    // //Checkboxes
test("Checkboxes", async({checkboxesPage}) => {
    await checkboxesPage.CheckboxNavigation();
    await checkboxesPage.checkbox1Selection();
    await checkboxesPage.checkbox2Selection();
    await checkboxesPage.checkbox3Selection();
    await checkboxesPage.checkbox4Selection();
    await checkboxesPage.subscribeButtonSelection();
    
});
    //Drag and Drop
test("Drag and Drop", async({dragAndDropPage}) => {
    await dragAndDropPage.DragDropNav();
    await dragAndDropPage.sourceElement.dragTo(dragAndDropPage.targetElement);
});
    // //FormValidation
test("Form Validation", async({formValidationPage, testData:{formValidationData}}) => {
    await formValidationPage.NavigationFormValidation();
    await formValidationPage.FillForm(formValidationData.firstName,formValidationData.lastName,formValidationData.email,formValidationData.age,formValidationData.url,uniqueMessage,formValidationData.priority);
    await expect(formValidationPage.SuccessMessage).toContainText(formValidationData.successMessage);
   
});
    //File Upload
test("File Upload", async({fileUploadPage}) => {
    await fileUploadPage.singleFileUpload();
    await expect(fileUploadPage.singlesuccessMessage).toContainText("dummy-50KB.pdf");
    await fileUploadPage.multipleFileUpload();
    await expect(fileUploadPage.multiplesuccessMessage).toContainText("new pdf2.pdf");
  
});
    //File Downloader
test("File Downloader", async({fileDownloaderPage}) => {
    await fileDownloaderPage.navigationDownloadMenu();
    const download = await fileDownloaderPage.DownloaderButton();
    const fileName = download.suggestedFilename();
    expect(fileName).toBe('data-export.csv');
    await download.saveAs("D:/My all files/downloader.csv");
});
    //AutoComplete
test("AutoComplete", async({autoCompletePage, testData:{autoCompleteData}}) => {
    await autoCompletePage.navigationAutoComplete();
    await autoCompletePage.SelectionCountry(autoCompleteData.country);
    await autoCompletePage.SelectMultiSelectCountry(autoCompleteData.language);

});
    //Notification message
test("Notification Message", async({notificationPage}) => {
    await notificationPage.NotificationNav();
    await notificationPage.successButton();
    await expect(notificationPage.successToastMessage).toBeVisible();
    await expect(notificationPage.successToastMessage).toHaveText(/Operation completed/);
    console.log(await notificationPage.successToastMessage.textContent());
});
    //Shadow Dom
test("Shadow Dom", async({shadowDomPage,testData:{shadowDomData}}) => {   
    await shadowDomPage.navigationShadow();
    await shadowDomPage.ShadowUsername(shadowDomData.username);
    await shadowDomPage.ShadowPassword(shadowDomData.password);
    await shadowDomPage.ShadowButton();
    await shadowDomPage.PlusButton();
    await expect(await shadowDomPage.getCounterDisplay()).toHaveText(shadowDomData.expectedCount);

});
    //Js Alert
test("Js Alert", async({jsAlertPage}) => {
    await jsAlertPage.navigationJsAlert();
    await jsAlertPage.triggerButton();
    const delayDialog = await jsAlertPage.triggerDelayButton();
    console.log(`Triggered 2 sec : ${delayDialog.message()}`);
    await delayDialog.accept();
});
    // Js Confirm
test("Js Confirm", async({jsConfirmPage}) => {
    await jsConfirmPage.navigationJsConfirm();
});
    //Js Prompt
test("Js Prompt", async({jsPromptPage}) => {
    await jsPromptPage.navigationjsprompt();
    await jsPromptPage.triggerOption();

});
    //mouse hover
test("Mouse Hover", async({mouseHoverPage}) => {
    await mouseHoverPage.navigationMouse();
    await mouseHoverPage.mousehoveroption();
});
    //Iframe
test("Iframe", async({iframePage,testData:{iframeData}}) => {
    await iframePage.navigationFrame();
    await iframePage.fillForm(iframeData.name,iframeData.email,iframeData.role);
    await expect(iframePage.successMessage).toContainText(iframeData.expectedRole);
});
    //multiple windows
test("Multiple Windows", async({multipleWindowsPage}) => {
    await multipleWindowsPage.navigateToMultipleWindows();
    const newTab = await multipleWindowsPage.openAndCaptureNewWindow();
    await multipleWindowsPage.interactWithNewWindow(newTab, "new window selected");
});
    //new tab
test("Verify text field interaction inside new tab via POM", async ({newTabPage}) => {
    await newTabPage.navigateToMultipleWindowsPage();
    const secondaryTab = await newTabPage.openAndCaptureNewTab();
    await newTabPage.interactInsideNewTab(secondaryTab, "new tab selected");
});
    //calendar
test("Calendar", async({calendarPage,testData:{calendarData}}) => {
    await calendarPage.navigationCalendar();
    await calendarPage.nativeDateField(calendarData.date);
    await calendarPage.nativeDateTime(calendarData.dateTime);
});

});



   













