///<reference types = "cypress" />
describe("Handling Webtable",()=>{
    it("handling webtable information",()=>{
       cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
       cy.get('tr td:nth-child(1)').each((el, index, list)=>{
        const str = el.text()
          if(str.includes('Articleship Fee'))
             {
          cy.get('tr td:nth-child(1)').eq(index).next().then((price)=>{
                  const pricetext = price.text()
                  expect(pricetext).to.equal('₹2,000')
                })
         }
       })
    })
})