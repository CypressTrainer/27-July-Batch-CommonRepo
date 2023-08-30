/// <reference types='cypress' />
describe("To Verify Static Dropdown Button", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false 
    }) 
   
    it('To open airindia website and verify from dropdown button', () => {
      cy.visit("www.airindia.in")
      cy.get(".mat-select-arrow-wrapper.ng-tns-c42-5").click({force:true})
      //  cy.get('div[role="listbox"]')
     // .find("mat-option[role='option']")
     // .each((el)=>{
    //  const a = el.text()
    //    cy.log(a)
    //    if(a === "Senior Citizen")
     //   {
      //      cy.wrap(el).click({force:true})
     //   }
    //  })

    cy.get("#mat-option-6").click()

    })
})