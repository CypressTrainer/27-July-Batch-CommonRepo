// Learning cy intercept

// https://graphql-to-do-app-angular.herokuapp.com/

// Scenario 

/*1 - Load the list
2 - Create a 
3   delete a   */

/*
///<reference types = 'cypress' />
describe("Open a todo list",()=>{

it("open to do website",()=>{

    cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
})

it("To click on create new item",()=>{
    cy.get(".create-item-title").eq(0).click({force:true})
})

it("Enter item name",()=>{
    cy.get(".ng-untouched.ng-pristine.ng-valid").type("shakeel")
})

it("clicking on create item",()=>{
    cy.get("input[value='Create Item']").click({force:true})
})
})  */


/// <reference types = "cypress" />


describe("Todo App E2E Test",()=>{

it("Should be able to load the list",()=>{
    cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
})


it("Should be able to load the list",()=>{
    cy.intercept('POST','https://graphql-java-spring-boot.herokuapp.com/graphql').as('request')
    cy.visit("https://graphql-to-do-app-angular.herokuapp.com/")
    cy.wait('@request')




// Identify the correct request using operation name

cy.intercept('POST','https://graphql-java-spring-boot.herokuapp.com/graphql',(req)=>{
    if(req.body.operationName==='createItemMutation'){
        req.alias = "createItemMutationthth"
        req.continue()
        
    }
})
})

})



















