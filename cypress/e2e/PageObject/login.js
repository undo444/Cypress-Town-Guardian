
class Login{
   navigate(){
        cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
             }

get Email(){
  return  cy.get('input[id=email-address]');
}

get password(){
  return cy.get('input[id=password]')
}

get submit(){
  return  cy.get('button[type=submit]')

}

    }

export default Login



  

