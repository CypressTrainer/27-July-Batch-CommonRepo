describe("To automate the facebook login", () => {

    it("Facebook username", () => {
        cy.visit('www.facebook.com')
        //cy.get('_sv4').eq(6).click()
        cy.get('.inputtext._55r1._6luy').eq(0).type('gopikrishnan')
    })




})