/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })

  it('Test Case', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.log("Welcome to the internship!")
  })
  it('Register with valid data',()=>{
    // cy.get('a[href="#/register"]').contains('Register').click();
    cy.get('input[id=first-name]').type('Cosmin');
    cy.get('input[id=last-name]').type('Popa');
    cy.get('input[id=email-address]').type('cosmin.popa@gmail.com');
    cy.get('input[id=password]').type('Test1234$');
    cy.get('input[id=confirm-password]').type('Test1234$');
    cy.get('input[id=personal-number').type('1940313337435');
    cy.get('button').contains('Register').click()
  }
  
  )



})