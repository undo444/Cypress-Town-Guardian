/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  })

  it('Test Case', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.log("Welcome to the internship!")
  })



})
