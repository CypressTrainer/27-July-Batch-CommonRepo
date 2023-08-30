/// <reference types='cypress' />

describe("To Learn Fixture",()=>{
    // var data
      before(()=>{
      /*   cy.fixture('example').then((famina)=>{
             data =famina;
                     })  */
  
                 cy.fixture('gopi').as('data')
                         });
  
     /*   it('Login Facobook Account using data situated in fixture ',function (){
  
       cy.visit("www.facebook.com")
       cy.get('#email').type(this.data.email)
       cy.get('#pass').type(this.data.password)
       cy.get('[data-testid="royal_login_button"]').click({force:true})
     })  */

     it("Learning custom command",function(){

        cy.visit("www.facebook.com")
        cy.facebookLogin(this.data.email,this.data.password)
       })
  })