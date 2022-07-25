/// <reference types="cypress" />

describe('Verify Login functionality for all users type', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  })

  
  it('LogIn with valid data for "Admin" user and access',()=>{
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
       
     cy.get('button')
       .should('have.class','sc-bdnxRM fJdnBK')
       .click()

     cy.get('a[label=Dashboard')
       .contains('Dashboard')
       .should('be.visible') 
       
     cy.get('a[label=Issues')
       .contains('Issues')
       .should('be.visible')  
       
     cy.get('a[label=Users')
       .contains('Users')
       .should('be.visible')  

     cy.get('a[label=Zones')
       .contains('Zones')
       .should('be.visible')  

     cy.get('a[label=Map')
       .contains('Map')
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

    cy.get('button')
      .should('have.class','sc-bdnxRM fJdnBK')
      .eq(0)
      .click()  
      
    cy.get('a[label=Issues')
      .contains('Issues')
      .should('be.visible')  
       
    cy.get('a[label=Users')
      .contains('Users')
      .should('be.visible')  

    cy.get('a[label=Map')
      .contains('Map')
      .should('be.visible') 

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

      cy.get('button')
        .should('have.class','sc-bdnxRM fJdnBK')
        .eq(0)
        .click()  
        
      cy.get('a[label=Issues')
        .contains('Issues')
        .should('be.visible')

      cy.get('a[label=Map')
        .contains('Map')
        .should('be.visible')  
    }) 

    it.only('LogIn with valid data for "Citizen" user',()=>{
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

      cy.get('button')
        .should('have.class','sc-bdnxRM fJdnBK')
        .eq(0)
        .click()  
    
      cy.get('a[label=Issues')
        .contains('Issues')
        .should('be.visible')

      cy.get('a[label=Map')
        .contains('Map')
        .should('be.visible')  

    })

   it('Show Password icon',()=>{

      cy.get('input[id=password]')
        .type('assist12345.')
        .should('be.visible')

      cy.get('svg[id=Capa_1]')
        .click()       

   })
   
   

})