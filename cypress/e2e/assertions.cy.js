/// <reference types="Cypress" />
 describe("Amazon Website Testing",()=>{
    it("To open amazon website",()=>{
        cy.visit("www.amazon.in")
        cy.get('[href="/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books"]').click()
        cy.url().should('include','/Books')
        cy.get('#glow-ingress-line2')
        .should('be.visible')
        .and('contain','Select your address')
        .and('have.length',1)
        cy.get('.navFooterLinkCol.navAccessibility')
        .should('have.length',4)
        cy.get('.navFooterLinkCol.navAccessibility')
        .find("a[href*='footer']").should('have.length',13)
        })
    })