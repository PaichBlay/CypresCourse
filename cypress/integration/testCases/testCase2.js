
import { selectors } from "../../fixtures/elements"

describe("document upload", ()=>{
    
    before(()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');

        Cypress.on('uncaught:exception', ()=>{
            return false
        })
        // cy.fixture("datathroughfixtures").then(($el)=>{
        //     el = $el
        // });
    });
    
    it("verify that upload is successful", ()=>{
        cy.get(selectors.chooseFieldButton).attachFile("sample upload file.jpg");
        cy.get(selectors.uploadButton).click();
        cy.get('h3').should('contain', 'File Uploaded!');
    });

});