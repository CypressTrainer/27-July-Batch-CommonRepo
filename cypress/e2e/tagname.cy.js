///<reference types='cypress'/>

describe("Learning locators using tagname",()=>{

    it("To open the google page",()=>{
        cy.visit("www.google.com")
      //  cy.get("textarea[maxlength='2048']").type("Hello World")
     // cy.get("textarea[class='gLFyf']").type("Hello World")
     //  cy.get("textarea[id='APjFqb']").type("Hello World")
    //  cy.get("textarea[jsaction='paste:puy29d;']").type("Hello World")
   // cy.get(".gLFyf").eq(0).type("Hello")
  //   cy.get(".a4bIc .gLFyf").type("Good Morning")

    //  cy.get(".a4bIc:nth-child(1)").type("Good")
      cy.get(".a4bIc #APjFqb").type("ID")
    })


})

