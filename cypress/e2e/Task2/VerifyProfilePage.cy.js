

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

         
         
    })
   
    })


