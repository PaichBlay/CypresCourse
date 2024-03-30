
// import page objects
import { appData } from "../../fixtures/appData";
import { selectors } from "../../fixtures/elements"

describe('Login', () => {

    beforeEach(
        ()=>{
            cy.visit('/');
            Cypress.on('uncaught:exception', ()=>{
                return false
            })
        });

    it('Valid credentials for standard user', () => {
        cy.login(appData.standadUsername, appData.password, selectors.usernameField, selectors.passwordField);
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
    })


    it('Valid credentials for problem user', () => {
        cy.login(appData.problem_username, appData.password, selectors.usernameField, selectors.passwordField);
    })


    it('Valid credentials for locked out user', () => {
        cy.login(appData.lockedout_username, appData.password, selectors.usernameField, selectors.passwordField);
    })


    it('Valid credentials for performance glitch user', () => {
        cy.login(appData.glitch_username, appData.password, selectors.usernameField, selectors.passwordField);
    })


    it('invalid credentials for user', () => {
        cy.invalidLogin("wrong username", "wrong password", selectors.usernameField, selectors.passwordField);
    })
    

  })