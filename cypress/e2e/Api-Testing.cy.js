

describe("API Testing",()=>{
    it("GET",()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
           // expect(response.status).equal(200)
           //expect(response.body.data[0].first_name).equal('Michael')
           cy.log(response).then((a)=>{
        
            cy.log(a.body.data[1].first_name)
            cy.log(a.body.data[2].first_name)
            cy.log(a.body.data[3].first_name)
            cy.log(a.body.data[4].first_name)
            cy.log(a.body.data[5].first_name)
            cy.log(a.body.data[6].first_name)
            cy.log(a.body.data[7].first_name)
            cy.log(a.body.data[8].first_name)
            cy.log(a.body.data[9].first_name)
            cy.log(a.body.data[10].first_name)
           })
    
            
           
        })
        
    })


    it("POST-Create user",()=>{
        var user={
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
        
    })


    it("Update",()=>{
        var user1={
            "name": "Techieqa",
            "job": "QA"

        }
        cy.request("PUT","https://reqres.in/api/users/2",user1).then((response)=>{
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)
        })
    })


    it("Delete user",()=>{

                cy.request("DELETE","https://reqres.in/api/users/2").then((response)=>{
            expect(response.status).equal(204)

        })
    })
})