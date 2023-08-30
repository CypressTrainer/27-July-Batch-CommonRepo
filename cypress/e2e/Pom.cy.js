import Admission from "./Admission-Open"

describe("Learning POM",()=>{
const ad = new Admission();
var data
before(()=>{
    // Fetching data from json file which is in the fixture folder
cy.fixture('table').then((fdata)=>{
data=fdata;
})
})
it("Pom1",()=>{
ad.openurl()
ad.enteryourname().type(data.YourFullName,{force:true})
ad.enteryouemailid().type(data.YourEmailHere)
ad.enteryoucontactno().type(data.YourContactNo)
/*ad.selectclassmode().select(data.Option1)
ad.selectcourse().select(data.Subjects)
ad.entermessage().type(data.Message)
ad.yesiaminterested().click({force:true})
cy.wait(1000)
ad.matchingtext().then((el)=>{
    const a = el.text()
    cy.log(a)
    cy.log(a).should('have.text',"Thank you for your message. It has been sent.")
}) */
})
})