/// <reference types = "cypress" />

describe("Reloading the API",()=>{
it("It should reloading the list",()=>{

     cy.intercept("POST","https://graphql-java-spring-boot.herokuapp.com/graphql").as('req')   
     cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
     cy.wait('@req')
    })

    it("Verify the the operation name ",()=>{
                cy.intercept('POST', 'https://graphql-java-spring-boot.herokuapp.com/graphql',(req)=>{
            if(req.body.operationName==='homePageQuery'){
                req.alias = "homePageQuery"
                req.continue()
                        }
        })
        cy.visit('https://graphql-to-do-app-angular.herokuapp.com/')
        cy.wait('@homePageQuery') 
    })
    it("Should create new item in the list",()=>{
        cy.intercept('POST', 'https://graphql-java-spring-boot.herokuapp.com/graphql',(req)=>{
            if(req.body.operationName==='createItemMutation'){
                req.alias = "createItemMutation"
                req.continue()
            }

    })

    cy.visit('https://graphql-to-do-app-angular.herokuapp.com/')
    cy.get('.create-item-title').first().click()
    cy.get(".create-item-editor input[placeholder='Item Name']").should('be.visible').type("Raji")
    cy.get(".create-item-editor input[type='button']").click()
    cy.wait('@createItemMutation')

})
})
