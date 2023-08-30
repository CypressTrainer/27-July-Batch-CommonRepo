/// <reference types ="cypress"/>
describe('Todo App E2E Test',()=>{
    it("Should be able to load the list",()=>{   
        cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
    })
        it("should be able to load the lists",()=>{

        cy.intercept('POST','https://graphql-java-spring-boot.herokuapp.com/graphql').as('request')
        cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
        cy.wait('@request')

    })

    it("Identify the correct request using operation name",()=>{
        cy.intercept('POST','https://graphql-java-spring-boot.herokuapp.com/graphql',(req)=>{
            if(req.body.operationName==='https://graphql-java-spring-boot.herokuapp.com/graphql')
    
              {
                req.continue
              }


    })
})


//negative scenario

it('Verify the operation name',()=>{
    cy.intercept('POST','https://graphql-java-spring-boot.herokuapp.com/graphql',(req)=>{

        if(req.body.operationName==='homePageQuery34567')
        {
            req.alias='homePageQuery'
            req.continue()
        }
        cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
        cy.wait('@homePageQuery')
})

})



})



   