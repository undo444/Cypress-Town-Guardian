/// <reference types="cypress" />



describe('Verify Register Functionality for all users type', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')

    
  
  })
   
  it('Register with valid data for "Admin" user',()=>{

    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<Math.random() * 15 ; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];}
    var email = string + '@gmail.com'

    cy.get('input[id=first-name]')
      .type('Cosmin')
      .should('be.visible')

    cy.get('input[id=last-name]')
      .type('Popa')
      .should('be.visible')

    cy.get('input[id=email-address]')
      .type( email)
      .should('be.visible')
     

    cy.get('input[id=password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=confirm-password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=personal-number]')
      .type('1910415015729')
      .should('be.visible')
      
    cy.get('button')
      .contains('Register')
      .click()
      .should('have.text','Register')

    cy.url().should('include','/#/login')
    
  })
  
  it('Register with valid data for "Validator" user',()=>{
  
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<Math.random() * 15 ; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];}
    var email = string + '@gmail.com'


    cy.get('input[id=first-name]')
      .type('Validator')
      .should('be.visible')

    cy.get('input[id=last-name]')
      .type('Assist')
      .should('be.visible')

    cy.get('input[id=email-address]')
      .type(email )
      .should('be.visible')

    cy.get('input[id=password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=confirm-password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=personal-number]')
      .type('1960413016400')
      .should('be.visible')
      
    cy.get('button')
      .contains('Register')
      .click()
      .should('have.text','Register')

      cy.url().should('include','/#/login')
    
  })
    
  it('Register with valid data for "Agent" user',()=>{
  
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<Math.random() * 15 ; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];}
    var email = string + '@gmail.com'

    cy.get('input[id=first-name]')
      .type('Agent')
      .should('be.visible')

    cy.get('input[id=last-name]')
      .type('Assist')
      .should('be.visible')

    cy.get('input[id=email-address]')
      .type(email)
      .should('be.visible')

    cy.get('input[id=password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=confirm-password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=personal-number]')
      .type('1960413016400')
      .should('be.visible')
      
    cy.get('button')
      .contains('Register')
      .click()
      .should('have.text','Register')

      cy.url().should('include','/#/login')
    
  })

  it('Register with valid data for "Citizen" user',()=>{
  
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<Math.random() * 15 ; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];}
    var email = string + '@gmail.com'


    cy.get('input[id=first-name]')
      .type('Citizen')
      .should('be.visible')

    cy.get('input[id=last-name]')
      .type('Assist')
      .should('be.visible')

    cy.get('input[id=email-address]')
      .type(email)
      .should('be.visible')

    cy.get('input[id=password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=confirm-password]')
      .type('Test1234$')
      .should('be.visible')

    cy.get('input[id=personal-number]')
      .type('1960413016400')
      .should('be.visible')
      
    cy.get('button')
      .contains('Register')
      .click()
      .should('have.text','Register')

      cy.url().should('include','/#/login')
    
  })
})

