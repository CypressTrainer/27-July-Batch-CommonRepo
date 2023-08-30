///<reference types="cypress-iframe" />
///<reference types="cypress" />
import 'cypress-iframe'; 
describe("To automate the iframe website",()=>{
      Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
    it("Open iframe website",()=>{
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   cy.frameLoaded("#courses-iframe")//scrollTo('bottom')
   cy.iframe().find("a[href='practice-project']").eq(1).click({force:true})
   cy.wait(20000)
   cy.iframe().find("#name").type("shakeel")
})
   /*it("Load iframe",()=>{
    cy.frameLoaded("#courses-iframe").scrollTo('bottom')
   })

   //it("Clicking on practice menu",()=>{
     //cy.iframe().find("a[href='practice-project']").eq(0).should('be.visible').click({force:true})
    //cy.iframe().contains("Blog").should('be.visible').click({force:true})
   //})

   it("Clicking dropdown button",()=>{
  //  cy.iframe().find(".dropdown").eq(4).click({force:true})
       cy.iframe().find("a[href='practice-project']").eq(1).click({force:true})
       cy.wait(20000)
       
   })

  
  it("2nd iframe",()=>{
    //cy.frameLoaded('#aswift_0')
   //cy.get("html[lang='en']").scrollTo("bottom")
    cy.iframe().find("#name").eq(3).type("shakeel")
  }) */
     
   
     
      
})