/// <reference types="cypress" />

describe('Show password icon functionality', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })

  
  class EmailGenerator {

    static id = 1;
    static generate(baseEmail) {
      const uniqueId = `+a${this.id++}`;  
      return baseEmail.replace('@', `${uniqueId}@`); 
    }
  }
  
  Cypress.Commands.add('generateEmail', (baseEmail) => {
    return EmailGenerator.generate(baseEmail)
  })
  
  it('generates a unique email', () => {
    console.log(EmailGenerator.generate('test@gmail.com'))    // test+a1@gmail.com
  })
  
  it('generates a second unique email', () => {
    console.log(EmailGenerator.generate('test@gmail.com'))    // test+a2@gmail.com
  })
  
  it('generates a third unique email via a custom command (across all specs)', () => {
    cy.generateEmail('test@gmail.com')
      .then(email => console.log(email));                     // test+a3@gmail.com
  })
})