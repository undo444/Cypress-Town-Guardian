/// <reference types="cypress" />

describe('Verify Login functionality for all users type', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  })

  
  it('LogIn with valid data for "Admin" user',()=>{
     cy.get('input[id=email-address]')
       .should('be.visible')
       .type('manolache.alexandru94@gmail.com')

     cy.get('input[id=password]')
       .type('NRQN3GGI')
       .should('be.visible')

     cy.get('svg[id=Capa_1]')
       .click()  

     cy.get('button')
       .contains('Login')
       .should('be.visible')
       .click() 
       
     cy.get('div')
       .should('be.visible')
   })


  it('LogIn with valid data for "Validator" user',()=>{
    cy.get('input[id=email-address]')
      .should('be.visible')
      .type('validator@assist.ro')

    cy.get('input[id=password]')
      .type('assist12345.')
      .should('be.visible')

    cy.get('svg[id=Capa_1]')
      .click()    

    cy.get('button')
      .contains('Login')
      .should('be.visible')
      .click()
      
      cy.get('div')
      .should('have.class','sc-gtsrHT gfuSqG')
    })

    it('LogIn with valid data for "Agent" user',()=>{
      cy.get('input[id=email-address]')
        .should('be.visible')
        .type('validator@assist.ro')
 
      cy.get('input[id=password]')
        .type('assist12345.')
        .should('be.visible')

      cy.get('svg[id=Capa_1]')
        .click()    
 
      cy.get('button')
        .contains('Login')
        .should('be.visible')
        .click()
        
        cy.get('div')
        .should('have.class','sc-gtsrHT gfuSqG')
    }) 

    it('LogIn with valid data for "Citizen" user',()=>{
      cy.get('input[id=email-address]')
        .type('citizen1@assist.ro')
        .should('be.visible')
 
      cy.get('input[id=password]')
        .type('assist12345.')
        .should('be.visible')

        cy.get('svg[id=Capa_1]')
          .click()  
 
      cy.get('button')
        .contains('Login')
        .should('be.visible')
        .click()
    
    })

   it('Show Password icon',()=>{

      cy.get('input[id=password]')
        .type('assist12345.')
        .should('be.visible')

      cy.get('svg[id=Capa_1]')
        .click()       

   })

})