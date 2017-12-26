import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Email e2e test', () => {

    let navBarPage: NavBarPage;
    let emailDialogPage: EmailDialogPage;
    let emailComponentsPage: EmailComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Emails', () => {
        navBarPage.goToEntity('email');
        emailComponentsPage = new EmailComponentsPage();
        expect(emailComponentsPage.getTitle()).toMatch(/Emails/);

    });

    it('should load create Email dialog', () => {
        emailComponentsPage.clickOnCreateButton();
        emailDialogPage = new EmailDialogPage();
        expect(emailDialogPage.getModalTitle()).toMatch(/Create or edit a Email/);
        emailDialogPage.close();
    });

    it('should create and save Emails', () => {
        emailComponentsPage.clickOnCreateButton();
        emailDialogPage.setFromInput('from');
        expect(emailDialogPage.getFromInput()).toMatch('from');
        emailDialogPage.setToInput('to');
        expect(emailDialogPage.getToInput()).toMatch('to');
        emailDialogPage.setReplyToInput('replyTo');
        expect(emailDialogPage.getReplyToInput()).toMatch('replyTo');
        emailDialogPage.setDateSentInput(12310020012301);
        expect(emailDialogPage.getDateSentInput()).toMatch('2001-12-31T02:30');
        emailDialogPage.typeSelectLastOption();
        emailDialogPage.setSubjectInput('subject');
        expect(emailDialogPage.getSubjectInput()).toMatch('subject');
        emailDialogPage.save();
        expect(emailDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class EmailComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-email div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class EmailDialogPage {
    modalTitle = element(by.css('h4#myEmailLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    fromInput = element(by.css('input#field_from'));
    toInput = element(by.css('input#field_to'));
    replyToInput = element(by.css('input#field_replyTo'));
    dateSentInput = element(by.css('input#field_dateSent'));
    typeSelect = element(by.css('select#field_type'));
    subjectInput = element(by.css('input#field_subject'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setFromInput = function(from) {
        this.fromInput.sendKeys(from);
    }

    getFromInput = function() {
        return this.fromInput.getAttribute('value');
    }

    setToInput = function(to) {
        this.toInput.sendKeys(to);
    }

    getToInput = function() {
        return this.toInput.getAttribute('value');
    }

    setReplyToInput = function(replyTo) {
        this.replyToInput.sendKeys(replyTo);
    }

    getReplyToInput = function() {
        return this.replyToInput.getAttribute('value');
    }

    setDateSentInput = function(dateSent) {
        this.dateSentInput.sendKeys(dateSent);
    }

    getDateSentInput = function() {
        return this.dateSentInput.getAttribute('value');
    }

    setTypeSelect = function(type) {
        this.typeSelect.sendKeys(type);
    }

    getTypeSelect = function() {
        return this.typeSelect.element(by.css('option:checked')).getText();
    }

    typeSelectLastOption = function() {
        this.typeSelect.all(by.tagName('option')).last().click();
    }
    setSubjectInput = function(subject) {
        this.subjectInput.sendKeys(subject);
    }

    getSubjectInput = function() {
        return this.subjectInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
