describe('Test for Rock, Paper, Scissors Game', () => {
  it('Loads page into Cypress', () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  })

  // Detects all the HTML elements
  it ("Checks page elements exist", () => {
    cy.get("h1").should("exist").contains("Rock Paper Scissors!");
    cy.get("h2").should("exist").contains("Result: ");
    cy.get("button").should("exist");
    cy.get("[data-cy=yourChoice]").should("exist").contains("Your choice:");
    cy.get("[data-cy=comChoice]").should("exist").contains("Computer's choice:");
    cy.get("[data-cy=yourScore]").should("exist").contains("Your Score: ");
    cy.get("[data-cy=comScore]").should("exist").contains("Computer Score: ");


  })

  // Test rock button
  it ("Rock button check", () => {
  // Tests click
    cy.get("#rock").click(true);
  // Checks "Rock" is appended to the correct HTML element
    cy.get("#player-choice").contains("Rock");

  // Checks conditions based on computer's answer
    cy.get("#computer-choice");
    cy.get("#computer-choice").then(($computerChoice) => {
        if ($computerChoice.text().includes("Rock")){
          cy.get("#result").contains("It's a draw")
        }
        else if ($computerChoice.text().includes("Paper")){
          cy.get("#result").contains("You lose...")
        }
        else {
          cy.get("#result").contains("You win!")
        }
      }) 
  })
  // Test paper button
  it ('Paper button check', () => {
  // Tests click
    cy.get("#paper").click(true);
  // Checks "Paper" is appended to the correct HTML element
    cy.get("#player-choice").contains("Paper");
  // Checks conditions based on computer's answer
    cy.get("#computer-choice");
    cy.get("#computer-choice").then(($computerChoice) => {
      if ($computerChoice.text().includes("Paper")){
        cy.get("#result").contains("It's a draw")
      }
      else if ($computerChoice.text().includes("Scissors")){
        cy.get("#result").contains("You lose...")
      }
      else {
        cy.get("#result").contains("You win!")
      }
    }) 
  })
  // Test scissors button
  it ('Scissors button check', () => {
  // Tests click
    cy.get("#scissors").click(true);
  // Checks "Scissors" is appended to the correct HTML element
    cy.get("#player-choice").contains("Scissors");
  // Checks conditions based on computer's answer
    cy.get("#computer-choice");
    cy.get("#computer-choice").then(($computerChoice) => {
      if ($computerChoice.text().includes("Scissors")){
        cy.get("#result").contains("It's a draw")
      }
      else if ($computerChoice.text().includes('Rock')){
        cy.get("#result").contains("You lose...")
      }
      else {
        cy.get("#result").contains("You win!")
      }
    }) 
  })

})