/// <reference types='cypress' />

describe("To Automate the Calendar - Dates", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false 
    }) 
      it('To open airindia website and verify dates', () => {
      cy.visit("www.airindia.in")
      cy.wait(2000)
      cy.get(".btn.bi.bi-calendar3").eq(0).click({force : true})
      cy.get(".ngb-dp-content.ngb-dp-months")
      .eq(0)
      .find(".custom-day.ng-star-inserted")
      .each((el)=>{
        const a = el.text()
        cy.log(a)
        if(a.includes('24')){
            cy.wrap(el).click({force:true})
        }
      })

      })
  })
  