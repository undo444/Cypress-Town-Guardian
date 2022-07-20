/// <reference types="cypress" />

describe('Show password icon functionality', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })

  
  it('Show password icon',()=>{

     cy.get('svg[id=Capa_1]')
       .eq(0)
       .click()
       

     cy.get('svg[id=Capa_1]')
       .eq(1)
       .click()

     cy.get('input[id=password]')
       .type('Test1234$')
       .should('have.class','sc-crzoAE ezHBjF')
     
     cy.get('input[id=confirm-password]')
       .type('Test1234$')
       .should('have.class','sc-crzoAE ezHBjF')
  }
  
  )



})