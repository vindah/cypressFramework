const data = require("../../fixtures/details.json");

import LoginPage from "../../pageObjects/LoginPage";
import ProductsPage from "../../pageObjects/ProductsPage";

const loginPage = new LoginPage();
const productPage = new ProductsPage();
const validUsername = data.login.validUsername;
const validPassword = data.login.validPassword;
const invalidUsername = data.login.invalidUsername;
const invalidPassword = data.login.invalidPassword;


describe('Automation Practice test', function (){

    before('Open website', function (){
        cy.visit(Cypress.env('url'))
        // cy.eyesOpen({
        //     appName: 'Practice App',
        //     testName: 'Login.Page.Test',
        // });
    });



    
    it("should verify that the user is on the page successfully.", function () {
        cy.url().should("include", "saucedemo");
        loginPage.isLoginLogoVisible();
        loginPage.isTheBotColumnVisible();
        
        // cy.eyesCheckWindow({ tag: 'Login Page' });
        // cy.eyesClose();
    });

    it("should verify that user cannot login with empty username and password",()=> {
        loginPage.clickOnLoginBtn();
        loginPage.isValidUsernameErrorDisplayed();
        loginPage.errorBtn.click();
    });

    it("should verify that user cannot login with empty username and valid password",()=> {
        loginPage.passwordField.clear().type(validPassword);
        loginPage.loginBtn.click();
        loginPage.errorDisplay.should('contain.text', 'Epic sadface: Username is required');
        loginPage.errorBtn.click();
    });

    it("should verify that user cannot login with empty password and valid username",()=> {
        loginPage.usernameField.clear().type(validUsername);
        loginPage.passwordField.clear();
        loginPage.loginBtn.click();
        loginPage.errorDisplay.should('contain.text', 'Epic sadface: Password is required');
        loginPage.errorBtn.click();
    });

    it("should verify that user cannot login with invalid password and invalid username",()=> {
        loginPage.usernameField.clear().type(invalidUsername);
        loginPage.passwordField.clear().type(invalidPassword)
        loginPage.loginBtn.click();
        loginPage.errorDisplay.should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        loginPage.errorBtn.click();
    });

    it("should verify that user cannot login with invalid username and valid password",()=> {
        loginPage.usernameField.clear().type(invalidUsername);
        loginPage.passwordField.clear().type(validPassword)
        loginPage.loginBtn.click();
        loginPage.errorDisplay.should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        loginPage.errorBtn.click();
    });

    it("should verify that user cannot login with invalid password and valid username",()=> {
        loginPage.usernameField.clear().type(validUsername);
        loginPage.passwordField.clear().type(invalidPassword);
        loginPage.loginBtn.click();
        loginPage.errorDisplay.should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        loginPage.errorBtn.click();
    });

    it("should verify that user can login with valid username and valid password",()=> {
        cy.loginUser(validUsername,validPassword);
        productPage.productPageTitle.should('be.visible').should('contain.text', 'Products');
    });


    


});