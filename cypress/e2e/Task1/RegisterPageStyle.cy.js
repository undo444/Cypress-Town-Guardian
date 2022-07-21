/// <reference types="cypress" />

describe('RegisterPageStyle', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })


  it('Register page style',()=>{
    cy.get('h1')
      .should('have.class','sc-kmIPcE htFMXJ')
      .should('have.text','Register to Town Guardian')
      .should('be.visible')

    cy.get('input[id=first-name]')
      .should('be.visible') 
      
    cy.get('input[id=last-name]')
      .should('be.visible')  

    cy.get('a')  
      .should('have.text','Sign in')
      .should('be.visible')

    cy.url()
      .should('include','/register') 
      

  })
})