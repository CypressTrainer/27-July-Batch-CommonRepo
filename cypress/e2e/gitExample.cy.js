///<reference types = 'cypress'/>

describe("To open the google page", () => {

    it("Open the google page", () => {

        cy.visit("https://www.google.com")

        cy.visit("www.youtube.com")

        cy.visit("www.facebook.com")
        cy.log("hello world")
    })




})
