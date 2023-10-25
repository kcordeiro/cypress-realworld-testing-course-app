describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").should("be.visible").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("does NOT allow invalid email address", () => {
    cy.getByData("email-input").should("be.visible").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow duplicate subscription", () => {
    cy.getByData("email-input").should("be.visible").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should("exist").contains("already exists")
  })
})
