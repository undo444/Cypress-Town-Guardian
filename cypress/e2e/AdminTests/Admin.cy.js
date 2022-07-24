/// <reference types="cypress" />

describe('Tests suite for Admin user type', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  })

  
  it('Add a new user',()=>{

    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<Math.random() * 15 ; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];}
    var email = string + '@gmail.com'

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

     cy.get('a[label=Users')
       .click() 
       
     cy.get('button[type=submit')
       .click() 
       
     cy.get('input[id=first-name')
       .type('Alex')

     cy.get('input[id=last-name]')
       .type('Mano')  

     cy.get('input[id=email]')
       .type(email)  

     cy.get('input[id=personal-number]')
       .type('1910212016696') 

     cy.get('input[id=address]')
       .type('Str. Mircea cel Batran')  

     cy.get('select[data-for=user_type]')
       .select('Validator')  

     cy.get('select[data-for=status]')
       .select('Validated')  

     cy.get('button')
       .contains('Save')
       .click()  
                  
   })

   it('Edit user',() =>{

    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<Math.random() * 15 ; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];}
    var email = string + '@gmail.com'

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

    cy.get('a[label=Users')
      .click() 

    cy.get('svg[cursor=pointer')  
      .eq(0)
      .click()

    cy.get('input[id=first-name')
      .clear()
      .type('Cezar')
    
      
    cy.get('input[id=last-name]')
      .clear()
      .type('Popescu')   

    cy.get('input[id=email]')
      .clear()
      .type(email)   

    cy.get('input[id=address]')
      .clear()
      .type('Str. Tipografiei')  
      
    cy.get('button')
      .contains('Save')
      .click()  

   })
 
  it('Delete User',() =>{

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

    cy.get('a[label=Users')
      .click() 

    cy.get('svg[cursor=pointer')  
      .eq(1)
      .click()
 
    cy.get('button')
      .contains('Delete')
      .should('be.visible')   


  }) 

  it('User Status',() =>{

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

    cy.get('a[label=Users')
      .click() 

    cy.get('svg[cursor=pointer')  
      .eq(0)
      .click()  

  })

  it('Users using Fileter button',() =>{

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

    cy.get('a[label=Users')
      .click() 
    
    cy.get('select[placeholder=placeholder')  
      .select('Status')
      .should('be.visible')

  })

  it('Search for a user',() =>{

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

    cy.get('a[label=Users')
      .click() 

    cy.get('input[placeholder=Search]')
      .type('Cezar Popescu') 
      
    cy.get('td') 
      .should('have.class','sc-kLojOw iehvjW')
      .contains('Cezar Popescu')
      .should('be.visible')

  })
   })