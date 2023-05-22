describe("Checking UI elements",function(){
 
    it("Verifying input box",function(){
        cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2F")
        cy.get('#small-searchterms').should('be.visible').should('be.enabled').type("books")
        cy.get('#gender-male').should('be.visible').check().should('be.checked')
        cy.get('#gender-female').should('be.visible').check().should('be.checked')
        cy.get('input#FirstName').should('be.visible').should('be.enabled').type("muthu")
        cy.get('input#LastName').should('be.visible').should('be.enabled').type("krishnan")
        cy.get('input#Email').should('be.visible').should('be.enabled').type("muthukrishnan6164@gmail.com")
        cy.get('input#Company').should('be.visible').should('be.enabled').type("Qaon cloud")
        cy.get('input#Password').should('be.visible').should('be.enabled').type("123shoot@")
        cy.get('input#ConfirmPassword').should('be.visible').should('be.enabled').type("123shoot@")
        cy.get('#register-button').should('be.visible').click()
 
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2Fwishlist")
        cy.get('input#Email').should('be.visible').should('be.enabled').type("muthukrishnan6164@gmail.com")
        cy.get('input#Password').should('be.visible').should('be.enabled').type("123shoot@")
     })


    })
