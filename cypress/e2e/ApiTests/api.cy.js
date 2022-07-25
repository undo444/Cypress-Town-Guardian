

describe('Get api user test',() =>{

let AccessToekn = "12345abcdef"

    it('Welcome to Assist Internship',()=>{

        cy.request({

          method : 'GET',
          url: 'https://assist-august-2021-be1.azurewebsites.net/Welcome',
          headers: {
            'authorization' : "Bearer" + AccessToekn
          }

        }).then((res)=>{
           cy.log(res)

            expect(res.status).to.eq(200)
            expect(res.body).to.eq('Welcome to Assist Internship 2021')
            
        }) 

        
    })

    it('Issue',()=>{

        cy.request({

          method : 'GET',
          url: 'https://assist-august-2021-be1.azurewebsites.net/api/Issue',
          headers: {
            'authorization' : "Bearer" + AccessToekn
          }
        

        }).then((res)=>{
           cy.log(res)

            expect(res.status).to.eq(200)
            expect(res.body).to.contain('id','42f6f2a2-6fbb-4091-6140-08da61aac3e5')
            
            
        }) 

})

    it('Delete Issue ID',()=>{

         cy.request({

          method : 'DELETE',
          url: 'https://assist-august-2021-be1.azurewebsites.net/api/Issue/42f6f2a2-6fbb-4091-6140-08da61aac3e5',
          headers: {
          'authorization' : "Bearer" + AccessToekn
      }
    

       }).then((res)=>{
       cy.log(res)

        expect(res.status).to.eq(200)
        expect(res.body).to.eq('Issue deleted')
        
        
    }) 

})

it('Put Alert',()=>{

    cy.request({

      method : 'PUT',
      url: 'https://assist-august-2021-be1.azurewebsites.net/api/User/3fa85f64-5717-4562-b3fc-2c963f66afa6',
      headers: {
        'authorization' : "Bearer" + AccessToekn
      },

        body:  {
        "photo": "string",
        "firstName": "string",
        "lastName": "string",
        "address": "string",
        "email": "string",
        "password": "string",
        "personalNumber": "string",
        "role": 1,
        "status": 0
      }
             
    

    }).then((res)=>{
       cy.log(res.body)

        
       expect(res.status).to.eq(200)
       expect(res.body).to.contain('firstName','string')
        
    }) 

    
})

})
            