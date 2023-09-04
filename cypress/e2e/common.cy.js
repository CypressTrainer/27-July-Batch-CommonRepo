describe("To automate the facebook login", () => {
    it("Facebook username", () => {
        cy.visit('www.facebook.com')
        cy.get('.inputtext._55r1._6luy').eq(0).type('gopikrishnan')
    })
})