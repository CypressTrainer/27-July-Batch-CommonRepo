class Admission
{
openurl()
{
   return cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
}
enteryourname()
{
return cy.get(".textwidget input[placeholder='Your Full Name Here']")
}
enteryouemailid()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap input[name='your-email']")
}
enteryoucontactno()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap input[name='tel-173']")
}
selectclassmode()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap select[name='classmode']")
}

selectcourse()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap select[name='Subject']") 
}
entermessage()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap textarea[name='message-227']") 
}
yesiaminterested()
{
    return cy.get(".textwidget .wpcf7 .form-group.text-center.mb-0 input[type='submit']") 
}
matchingtext()
{
   
  //return cy.contains("Thank you for your message. It has been sent.")
   return cy.get("/html[1]/body[1]/div[1]/section[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]")
}

}
export default Admission

