


import "cypress-fill-command";// this plugin allows you to use fill command instead of type. fill is faster than type. it is installed with command npm install cypress-fill-command
import '@testing-library/cypress/add-commands';
Cypress.Commands.add(" cy.configureCypressTestingLibrary", config=>{
cy.configureCypressTestingLibrary(config)
});
import 'cypress-file-upload'; // plugin to enable me upload files

Cypress.Commands.add('login', (username, password, usernameField, passwordField) => {
    cy.get(usernameField).fill(username);
        cy.get(passwordField).fill(password);
       // cy.get('input#login-button').click();
        cy.findByText('LOGIN').click(); // find a dom element by text when the CSS doesn't seem to work
})


Cypress.Commands.add('invalidLogin', (username, password, usernameField, passwordField) => {
    cy.get(usernameField).fill(username);
        cy.get(passwordField).fill(password);
        cy.findByText('LOGIN').click(); // find a dom element by text when the CSS doesn't seem to work
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service');
})



















// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

