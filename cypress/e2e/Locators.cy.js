// To Open Facebook

describe("Learning Different Types of CSS locators Using Cypress",()=>{

it("To open Facebook page",()=>{

    cy.visit("www.facebook.com");

    // using different locators   tagname[atrribute='value']

  //  cy.get('.inputtext._55r1._6luy').type("abc@gmail.com");
  //cy.get("input[type='text']").type("text");
  //  cy.get("input[name='email']").type("Shakeel Khan");
  //  cy.get("input[id='email']").type("Shakeel Id")
 //   cy.get("input[data-testid='royal_email']").type("Royal Email")
 
   //cy.get("input[type='text']").type("ABCD@gmail.com")
  // cy.get(".inputtext._55r1._6luy").type("CDE@gmail.com")  //will not take this locators why? 
  //cy.wait(100)
 // cy.get("input[name='email']").should('be.visible').type("text@gmail.com")

 // cy.get("input[id='email']").type("a1234@gmail.com")
  //cy.get("input[data-testid='royal_email']").type("abcd1234@gmail.com")
 // cy.get("input[placeholder='Email.address.or.phone.number']").type("placeholder@gmail.com")

  //cy.get("input[aria-label='Email.address.or.phone.number']").type("Arial@gmail.com")
  cy.xpath("//input[@type='text']").type("text");
   

})

})

  
  