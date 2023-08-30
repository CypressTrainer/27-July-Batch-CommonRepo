///<reference types="cypress"/>


describe("Learning xpath",()=> {

  
  it ("Open google page",()=>{
    cy.visit("www.google.com")
   // cy.xpath("//textarea[@class='gLFyf']").type("Learning xpath locators")
    cy.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div[1]/div[2]/textarea").type("Learning absolute xpath")
    })




})