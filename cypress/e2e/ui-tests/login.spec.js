const data = require("../../fixtures/example.json");

import LoginPage from "../../pageObjects/LoginPage";

const loginPage = new LoginPage();
const validUsername = data.login.validUsername;
const validPassword = data.login.validPassword;
const invalidUsername = data.login.invalidUsername;
const invalidPassword = data.login.invalidPassword;
const emptyUsername = data.login.emptyUsername;
const emptyPassword = data.login.emptyPassword;


describe('Automation Practice test', function (){
    before('Open website', function (){
        cy.visit(Cypress.env('url'))
        cy.url().should("include", "saucedemo");
    });

    

});