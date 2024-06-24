export class LoginPage {

    login_username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button';
    enterUsername(username) {
        cy.get(this.login_username_textbox).type(username)

    }
    enterPassword(password) {
        cy.get(this.login_password_textbox).type(password)

    }
    clickLoginButton() {
        cy.get(this.login_button).click()
    }
}