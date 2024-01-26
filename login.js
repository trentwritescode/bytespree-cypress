/*
    This test is used to test the login functionality of the application.
*/
import loginConfig from '../loginConfig.js';

describe('Login Test', () => {
    it('Admin can log into the app', () => {
        // Replace with your app's login URL
        cy.visit(loginConfig.url)
  
        cy.get('input[id="input-username"]').type(loginConfig.username)
        
        // Must click continue to show password input
        cy.click('button[type="submit"]')
        
        cy.get('input[id="input-password"]').type(loginConfig.password)
        
        cy.click('button[type="submit"]')

        // After login, assert that you are on the dashboard or another page that indicates a successful login
        cy.url().should('include', '/data-lake')
    })
})
  