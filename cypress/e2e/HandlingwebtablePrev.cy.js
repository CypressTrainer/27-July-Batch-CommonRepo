/// <reference types ="cypress" />
describe("Handling Webtable",()=>{
    it("To grab the 2000 rs from the webtable",()=>{
    cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
    cy.get("tr td:nth-child(S)").each((el,index, list)=>{
    const str = el.text()
    if(str.includes("₹2,000"))
    {
        cy.get("tr td:nth-child(2)").eq(index).prev().then((price)=>{
            const pricetext = price.text()
            expect(pricetext).to.equal('Articleship Fee')
        })
      
    }
    })
    }) 
     })


    