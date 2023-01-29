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

    isLoginLogoVisible(){
        this.loginLogo.should('be.visible');
    }

    isTheBotColumnVisible(){
        this.botColumn.should('be.visible');
    }

    clickOnLoginBtn(){
        this.loginBtn.click();
    }

    isValidUsernameErrorDisplayed(){
        this.errorDisplay.should('contain.text', 'Epic sadface: Username is required');
    }


}
export default LoginPage;