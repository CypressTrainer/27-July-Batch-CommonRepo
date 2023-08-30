describe("Verify the price of the product",()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
        })
        var data
        before(()=>{
            cy.fixture('table').then((fdata)=>{
                data=fdata
              })
        })
 
        it("To veriy the price",()=>{
        
            cy.visit("www.amazon.in")
            cy.SelectWatch(data.selectwatch).eq(1).should('be.visible')
           
            
            
        })
    })

