import Login from "./PageObject/login";


const loginpage=new Login();
let example;

describe('Cypress POM Test suite',function()  {
     
    before(() => {
    
        cy.fixture('example.json').then((data) => {
           
            example=data;
          })
      })

 it('LogIn with valid data for "Admin" user and access',function(){ 
  
 

  loginpage.navigate();
  loginpage.Email.type(example.email);
  loginpage.password.type(example.password);
  loginpage.submit.click();

 cy.url().should('be.equal','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
})

})
