import { test as baseTest } from '@playwright/test';
import { AutoComplete } from '../pages/AutoComplete';
import { Calendar } from '../pages/Calendar';
import { Checkboxes } from '../pages/Checkboxes';
import { DragAndDrop } from '../pages/DragAndDrop';
import { DynamicPage } from '../pages/DynamicPage';
import { FileDownloader } from '../pages/FileDownloader';
import { FileUpload } from '../pages/FileUpload';
import { FormValidation } from '../pages/FormValidation';
import { Iframe } from '../pages/Iframe';
import { JsAlert } from '../pages/JsAlert';
import { JsConfirm } from '../pages/JsConfirm';
import { JsPrompt } from '../pages/JsPrompt';
import { LoginPage } from '../pages/LoginPage';
import { MouseHover } from '../pages/MouseHover';
import { MultipleWindows } from '../pages/MultipleWindows';
import { NewTab } from '../pages/NewTab';
import { Notification } from '../pages/Notification';
import { Pagination } from '../pages/Pagination';
import { RadioPage } from '../pages/RadioPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { ShadowDom } from '../pages/ShadowDom';
import testDataRaw from '../TestData/testData.json';

type MyFixtures = {
    autoCompletePage: AutoComplete;
    calendarPage: Calendar;
    checkboxesPage: Checkboxes;
    dragAndDropPage: DragAndDrop;
    dynamicPage: DynamicPage;
    fileDownloaderPage: FileDownloader;
    fileUploadPage: FileUpload;
    formValidationPage: FormValidation;
    iframePage: Iframe;
    jsAlertPage: JsAlert;
    jsConfirmPage: JsConfirm;
    jsPromptPage: JsPrompt;
    loginPage: LoginPage;
    mouseHoverPage: MouseHover;
    multipleWindowsPage: MultipleWindows;
    newTabPage: NewTab;
    notificationPage: Notification;
    paginationPage: Pagination;
    radioPage: RadioPage;
    registrationPage: RegistrationPage;
    shadowDomPage: ShadowDom;
    testData:typeof testDataRaw; //expose the json schema saftly
};

export const test = baseTest.extend<MyFixtures>({
    testData: async ({}, use) => { await use(testDataRaw);},
    autoCompletePage: async ({ page }, use) => { await use(new AutoComplete(page)); },
    calendarPage: async ({ page }, use) => { await use(new Calendar(page)); },
    checkboxesPage: async ({ page }, use) => { await use(new Checkboxes(page)); },
    dragAndDropPage: async ({ page }, use) => { await use(new DragAndDrop(page)); },
    dynamicPage: async ({ page }, use) => { await use(new DynamicPage(page)); },
    fileDownloaderPage: async ({ page }, use) => { await use(new FileDownloader(page)); },
    fileUploadPage: async ({ page }, use) => { await use(new FileUpload(page)); },
    formValidationPage: async ({ page }, use) => { await use(new FormValidation(page)); },
    iframePage: async ({ page }, use) => { await use(new Iframe(page)); },
    jsAlertPage: async ({ page }, use) => { await use(new JsAlert(page)); },
    jsConfirmPage: async ({ page }, use) => { await use(new JsConfirm(page)); },
    jsPromptPage: async ({ page }, use) => { await use(new JsPrompt(page)); },
    loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
    mouseHoverPage: async ({ page }, use) => { await use(new MouseHover(page)); },
    multipleWindowsPage: async ({ page,context }, use) => { await use(new MultipleWindows(page,context)); },
    newTabPage: async ({ page,context }, use) => { await use(new NewTab(page,context)); },
    notificationPage: async ({ page }, use) => { await use(new Notification(page)); },
    paginationPage: async ({ page }, use) => { await use(new Pagination(page)); },
    radioPage: async ({ page }, use) => { await use(new RadioPage(page)); },
    registrationPage: async ({ page }, use) => { await use(new RegistrationPage(page)); },
    shadowDomPage: async ({ page }, use) => { await use(new ShadowDom(page)); },
});

export {expect} from '@playwright/test';