import Register from "./PageObject/register";
const registerpage = new Register();
let example;

describe('Cypress POM Test suite',function()  {
  
    before(() => {
    
        cy.fixture('example.json').then((data) => {
           
            example=data;
          })
      })
    it('Register with valid data for "Admin" user and access',function(){ 
        
     
     registerpage.navigate();
     registerpage.firstname.type(example.FirstName);
     registerpage.lastname.type(example.LastName);
     registerpage.email.type(example.email);
     registerpage.password.type(example.password);
     registerpage.confirmPassword.type(example.ConfirmPassworD);
     registerpage.personalNumber.type(example.PersonalNumber);
     registerpage.submit.click();

     cy.url().should('be.equal','https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    })
    
    })