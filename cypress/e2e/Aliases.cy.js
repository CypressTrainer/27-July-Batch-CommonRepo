///<reference types = "cypress" />
describe("Learning Aliases in cypress",()=>{
    it("Open google",()=>{
        cy.visit("https://www.google.com");
        cy.get('.gLFyf').as('textbox')
        cy.get('@textbox').type("India")
        cy.get('.FPdoLc > center > .gNO89b').as('googlesearch')
        cy.get('@googlesearch').click({force:true})
        cy.get('.yKMVIe').then((el)=>{
            const a = el.text()
            expect(a).to.equal('India')
        })
    })
})





cy.get("Parentloc").find("childloc").each((el)=>{
    const a = el.text()
    expect(a).to.equal('Amazon')
})









