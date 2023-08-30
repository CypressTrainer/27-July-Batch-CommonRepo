/// <reference types = "cypress"/>

describe("TO DO",()=>{
    it('should be able to load the list',()=>{
        cy.intercept('POST','https://graphql-java-spring-boot.herokuapp.com/graphql').as('request')
        cy.visit('https://graphql-to-do-app-angular.herokuapp.com/')
        cy.wait('@request') 
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

 it("should create new item in the list ",()=>{

        cy.intercept('POST', 'https://graphql-java-spring-boot.herokuapp.com/graphql',(req)=>{
            if(req.body.operationName==='createItemMutation'){
                req.alias = "createItemMutation"
                req.continue()
            }
        })
        cy.visit('https://graphql-to-do-app-angular.herokuapp.com/')
        cy.get('.create-item-title').first().click();
        cy.get('.create-item-editor input[placeholder="Item Name"]').should('be.visible').type("Raj")
        cy.get('.create-item-editor input[type="button"]').click()
        cy.wait('@createItemMutation')
      //  cy.wait("@homePageQuery")
        cy.contains('Raj').should('be.visible')

    }) 
})