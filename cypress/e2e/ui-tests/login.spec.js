const data = require("../../fixtures/example.json");

import LoginPage from "../../pageObjects/LoginPage";

const loginPage = new LoginPage();
const validUsername = data.login.validUsername;
const validPassword = data.login.validPassword;
const invalidUsername = data.login.invalidUsername;
const invalidPassword = data.login.invalidPassword;


describe('Automation Practice test', function (){
    before('Open website', function (){
        cy.visit(Cypress.env('url'))
    });

    it("should verify that the user is on the page successfully.", function () {
        cy.url().should("include", "saucedemo");
        loginPage.loginLogo.should('be.visible');
        loginPage.botColumn.should('be.visible');
    });

    it("should verify that user cannot login with empty email and password",()=> {
        loginPage.loginBtn.click();
        loginPage.errorDisplay.should('contain.text', 'Epic sadface: Username is required');
        cy.wait(2000);
        loginPage.errorBtn.click();

    });


});