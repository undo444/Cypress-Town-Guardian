/// <reference types="cypress" />

describe('Show password icon functionality', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })

  
  it('Show password icon',()=>{
     cy.get('svg[id=Capa_1]').click()
     cy.get('input[id=password]').type('Test1234$').should('be.visible')
     cy.get('input[id=confirm-password]').type('Test1234$').should('be.visible')
  }
  
  )



})