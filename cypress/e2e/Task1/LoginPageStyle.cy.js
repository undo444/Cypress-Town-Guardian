/// <reference types="cypress" />

describe('Verify Login LoginPageStyle', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  })


  it('Login page style',()=>{
    cy.get('button')
       .contains('Login')
       .should('be.visible')
       .should('have.css','background-color')
       .and('eq', 'rgb(11, 37, 89)')
       
    cy.get('a')  
      .contains('Reset') 
      .should('be.visible')
      .should('have.css','font-weight')
      .and('eq', '600')

    

    
  })
  
})