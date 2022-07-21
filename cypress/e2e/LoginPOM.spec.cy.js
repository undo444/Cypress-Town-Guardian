import Login from "./PageObject/one";
describe('Cypress POM Test suite',function()  {
  
it('LogIn with valid data for "Admin" user and access',function(){ 
 const loginpage = new Login(); 
 loginpage.navigate();
 loginpage.email('alex@yahoo.com');
 loginpage.password('Test1234');
 loginpage.submit();

 cy.url().should('be.equal','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
})

})
