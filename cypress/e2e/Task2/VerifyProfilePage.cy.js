

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

       cy.get('button')
         .contains('Login')
         .should('be.visible')
         .click() 
          
        cy.wait(5000) 
        cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/profile')

        cy.get('input[id=firstName]')
          .should('have.value','Alexandru')

        cy.get('input[id=lastName]')
          .should('have.value','Manolache') 

        cy.get('input[id=address')  
          .should('have.value','test adress')

        cy.get('input[id=email]')
          .should('have.value','manolache.alexandru94@gmail.com')  

        cy.get('input[id=personalNumber]')
          .should('have.value','1940313337435')  

        cy.get('button')  
          .contains('Save')
          .should('be.visible')

        




         
         
    })
   
    })


