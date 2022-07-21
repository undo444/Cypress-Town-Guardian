


class Login{
   navigate(){
        cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
             }


email(){
  cy.get('input[id=email-address]')
    .type('manolache.alexandru94@gmail.com')

    return this
}
  
password(){
  cy.get('input[id=password]')
    .type('NRQN3GGI')

    return this
}

submit(){
  cy.get('button')
    .contains('Login')
    .click() 

    }
  }

export default Login



  

