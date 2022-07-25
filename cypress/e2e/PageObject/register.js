class Register{
    navigate(){
         cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    }             

    get firstname(){
      return  cy.get('input[id=first-name]');
    }
    get firstname(){
      return        cy.get('input[id=first-name]')        
    }
    get lastname(){
      return  cy.get('input[id=last-name]');    
    }
    get email(){
      return  cy.get('input[id=email-address]');      
    }
    get password(){
      return  cy.get('input[id=password]');      
    }
    get confirmPassword(){
      return  cy.get('input[name=confirmPassword]');
    }
    get personalNumber(){
      return  cy.get('input[id=personal-number]');    
    }
    get submit(){
      return  cy.get('button[type=submit]');
    }
    }

     export default Register
    






