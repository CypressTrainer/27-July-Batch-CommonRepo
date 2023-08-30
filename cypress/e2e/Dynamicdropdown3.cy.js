/// <reference types='cypress'/>

describe("To verify dynamic dropdown button", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

        return false
    })

    it("To open the airindia wesite and verify the dynamic dropdown button", () => {

        cy.visit("https://www.airindia.in")
        cy.get("input[id='from']").type("a")
        cy.wait(1000)
        cy.get("#ui-id-2").find(".ui-menu-item").each(($el, index, list) => {
            const a = $el.text()
            cy.log(a)
            //if(a==='Agra, Kheria Airport, AGR, India')

            if (a.includes('Agra, Kheria Airport, AGR, India')) {
                cy.wrap($el).click()
            }

        })

    })



})

