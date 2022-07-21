import Register from "./PageObject/register";

describe('Cypress POM Test suite',function()  {
  
    it('Register with valid data for "Admin" user and access',function(){ 
        
     const registerpage = new Register(); 
     registerpage.navigate();
     registerpage.firstname('Al');
     registerpage.lastname('Popa');
     registerpage.email("cici@yahoo.com");
     registerpage.password('1234');
     registerpage.confirmpassword('1234')
     registerpage.personalnumber('6001313019334')
     registerpage.registerclick();
     cy.url().should('be.equal','https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    })
    
    })