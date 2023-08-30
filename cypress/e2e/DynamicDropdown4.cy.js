///<reference types='cypress'/>

describe("Verifying the Dynamice Dropdown button", () => {

    it("Open Air India Website", () => {
        cy.visit("https://www.airindia.in")
    })

    it("Enter 'a' in the dynamic dropdown 'from' ", () => {
        cy.get("input[id='from']").type("a")
    })


    it("Enter the airport name", () => {
        cy.get("#ui-id-2")
            .find(".ui-menu-item")
            .each((el, index, list) => {
                const airportname = el.text()
                cy.log(airportname)

                if (airportname.includes('Adana, Adana Airport, ADA, Turkey')) {
                    cy.wrap(el).click({ force: true })
                }
            })

    })


})