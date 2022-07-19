/// <reference types="cypress" />

describe('Verify Register Functionality', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })

  
  
  it('Register with valid data',()=>{
  
    cy.get('input[id=first-name]').type('Cosmin').should('be.visible')
    cy.get('input[id=last-name]').type('Popa').should('be.visible')
    cy.get('input[id=email-address]').type('cosmin.popa@gmail.com').should('be.visible')
    cy.get('input[id=password]').type('Test1234$').should('be.visible')
    cy.get('input[id=confirm-password]').type('Test1234$').should('be.visible')
    cy.get('input[id=personal-number').type('1950313015829').should('be.visible')
    cy.get('button').contains('Register').click()
    
  }
  
  )

})

