///<reference types="cypress" />
describe("To open the amazon website",()=>{
it("To verify the child tab",()=>{
    cy.visit("https://www.amazon.in")
    cy.get("#twotabsearchtextbox").type("Watches for men")
    cy.get("#nav-search-submit-button").click()
    cy.get(".s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16")
    .find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal")
    .each((el,index,list)=>{
  const obj=el.text()
  cy.log(obj)
  if(obj.includes("Analog Men's Watch"))
  {
        cy.wrap(el).invoke('removeAttr','target').click({force:true})
   }
    })
})
})
/*})
it("Enter string watches for men",()=>{
    cy.get("#twotabsearchtextbox").type("Watches for men")
})
it("Clicking on the search button",()=>{
    cy.get("#nav-search-submit-button").click()
})
it("Selecting a watch",()=>{
    cy.get(".s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16")
    .find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal")
    .each((el,index,list)=>{
  const obj=el.text()
  cy.log(obj)
  if(obj.includes("Analog Men's Watch"))
  {
        cy.wrap(el).invoke('removeAttr','target').click({force:true})
   }
    })
})

}) */