/// <reference types = "cypress" />
/*describe("Using List",()=>{
it("Verify the items from the list",()=>{
cy.visit("https://www.flipkart.com/")
const menulinkstext =[
    "Top Offers",
    "Mobiles & Tablets",
    "Electronics",
    "TVs & Appliances",
    "Fashion",
    "Beauty",
    "Home & Furniture",
    "FK Originals",
    "Flights & Hotels",
   "Grocery"
]
cy.get("._37M3Pb").find(".eFQ30H").each((item,index,list)=>{
//const a = list.text()
//expect(item).to.contain(menulinkstext[index])
expect(menulinkstext[index]).to.contain(menulinkstext[index])
})

})

}) */

/// <reference types='cypress' />

describe("To Verify Dynamic Dropdown Button", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false 
    }) 
  
  
    it('To open airindia website and verify from dropdown button', () => {
  
      cy.visit("www.airindia.in")
      cy.get("input[id='From']").type('a',{force:true})
      cy.get("#ngb-typeahead-0").find('.row.airport-country-detail').each(($el, index, list) => {
        
        //const a = $el.text()
        cy.log(list.text())
       
     /*  if (a === 204) {
        //  cy.wrap($el).click({force:true})
        // cy.wrap(index).click({force:true})
       //   cy.wrap($el).click({force:true})
         // cy.wrap($el).click({force:true})
          cy.wrap($el).eq(index).click({force:true})
        } */
  
      }) 
    })
    })
  
  
    /*it('verify To dropdown button', () => {
  
      cy.get("input[id='To']").type('ber')
      cy.get('#ui-id-3').find('.ui-menu-item').each((el, index, list) => {
        const b = el.text()
        if (b === 'Berlin, Berlin Tegel Airport, TXL, Germany') {
          cy.wrap(el).click()
        }
      })
    }) */
  