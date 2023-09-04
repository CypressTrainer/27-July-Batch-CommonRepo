/// <reference types='cypress' />

describe("Automate facebook using Git",()=>{
    it("Sign in to facebook",()=>{
        cy.visit("www.facebook.com")
        cy.get('.inputtext._55r1._6luy').eq(0).type('gopikrishnan')
        cy.get("input[name='pass']").type("A123@")
        cy.get("button[name='login']").click()
    })
})