///<reference types="cypress-iframe" />
///<reference types="cypress" />
import 'cypress-iframe'; 
describe("To automate the iframe website",()=>{
    
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
    it("Open w3schools website",()=>{

   cy.visit("https://www.w3schools.com/")
   cy.get("#search2").type("iframe").type('{enter}')
   cy.frameLoaded("#master-1")
   cy.wait(5000)
  // cy.iframe().find("a[class='p_ styleable-title']").eq(1).should('be.visible').click({force:true})
   cy.iframe().contains("What Is an iFrame?").should('be.visible').click({force:true})

     })

     /*it("Enter 'iframe' into the text box",()=>{
        cy.get("#search2").type("iframe").type('{enter}')
     })    
      
     it("Loading Iframe",()=>{
        cy.frameLoaded("#master-1")
        cy.wait(5000)
       // cy.iframe().find("a[class='p_ styleable-title']").eq(1).should('be.visible').click({force:true})
       cy.iframe().contains("What Is an iFrame?").should('be.visible').click({force:true})
        
       
     }) */
     
     
      
})