///<reference types="cypress"/>



describe("To verify the dynamic dropdown button", () => {

    it("Open Air India website", () => {

        cy.visit('https://www.airindia.in/')
    })
    it("Enter the 'a' character in 'from' dynamic dropdown", () => {
        cy.get("input[id='from']").type('a')


    })



    it("Select Agra Airport ", () => {
        cy.get("#ui-id-2").find(".ui-menu-item").each($el, index, list) => {

            const airportname = el.text()
            cy.log(airportname)
            if (airportname.includes('Agra, Kheria Airport, AGR, India')) {
                cy.wrap(el).click({ force: true })
            }
        })
    })


})