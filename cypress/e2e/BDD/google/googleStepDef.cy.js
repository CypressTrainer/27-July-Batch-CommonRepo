
Given ('I open google page',()=>
{
    cy.visit("www.google.com") 
})

When('I enter the string into text box',()=>
{
    cy.get("#APjFqb").type("Hello world")
})

When ('I click the search button',()=>{
    cy.get(".gNO89b").first().click()
})

Then('Entered string page get opened',()=>{

})