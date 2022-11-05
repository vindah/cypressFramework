class LoginPage{
    get usernameField(){
        return cy.get('[data-test="username"]');
    }

    get passwordField(){
        return cy.get('[data-test="password"]');
    }

    get loginBtn(){
        return cy.get('[data-test="login-button"]');
    }

    get loginLogo(){
        return cy.get('.login_logo');
    }

    get botColumn(){
        return cy.get('.bot_column');
    }

    get errorDisplay(){
        return cy.get('[data-test="error"]');
    }

    get errorBtn(){
        return cy.get('.error-button');
    }
}
export default LoginPage;