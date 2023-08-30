
///<reference types='cypress'/>


describe("To select watch by using custom command",()=>{

    it("To open Amazon website",()=>{

        cy.visit("https://www.amazon.in/")
    })
    
    it("Enter the string 'watches for  men in the text box'",()=>{
       
        cy.addwatch("Vintage Bronze Steam Train Mens Kids Quartz Gift Pocket Watch with Chain")
     
    })


})