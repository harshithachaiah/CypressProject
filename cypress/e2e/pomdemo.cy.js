
import { LoginPage } from "./Pages/login-page"

const loginPage = new LoginPage()

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe("All login functions", () => {

    // .only to run only one function and skip to skip the functionn
    it('Login with valid cred', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton()



    })

    it('Login with invalid username', () => {

        loginPage.enterUsername('Adminss')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton()



    })
})

it('Login with invalid password', () => {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin1234sss')
    loginPage.clickLoginButton()



})