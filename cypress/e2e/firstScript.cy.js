///<reference types="cypress"/>


describe("First script to open google page",()=> {

    beforeEach(()=>{
        cy.visit("www.google.com") 
        cy.get("#APjFqb").type("Hello world")
        cy.get(".gNO89b").first().click()
    })

  it ("To verify the Hello world images",()=>{
    cy.get(".FMKtTb.UqcIvb").first().click()
})

it ("Click photos which is place on fifth number",()=>{
    cy.get(".rg_i.Q4LuWd").eq(5)
})

after(()=>{
    cy.log("Test ended")
})

})