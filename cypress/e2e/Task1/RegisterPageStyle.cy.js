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
      .should('have.css','display')
      .and('eq', 'block')
      

    cy.get('input[id=first-name]')
      .should('be.visible')
      .invoke('css','max-width')
      .should('equal','420px')
      
    cy.get('input[id=last-name]')
      .should('be.visible') 
      .invoke('css','height')
      .should('equal','45.99609375px') 

    cy.get('a')  
      .should('have.text','Sign in')
      .should('be.visible')
      .invoke('css','color')
      .should('equal','rgb(11, 37, 89)')

     
      

  })
})