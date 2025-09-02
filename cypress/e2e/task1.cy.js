describe('Simple Task Manager — Authentication Flows', () => {
  // A constant variable representing a user was used in the following tests for Task 1
  const user = {
    username: `user${Date.now()}`, // Dynamically generate a unique username
    email: `user${Date.now()}@example.com`, // Dynamically generate a unique email
    password: 'Password123!', // Strong password for the user
  };

  // Test script of the test case: registers and then logs in a new user successfully
  it('registers and then logs in a new user successfully', () => {
    cy.register(user.username, user.email, user.password); // Register with user credentials
    cy.url().should('include', '/auth/login'); //Redirect to login
    cy.wait(1000); // Wait for UI to reflect changes
    cy.login(user.email, user.password); // Login with user credentials
    cy.url().should('include', '/dashboard'); // Redirect to dashboard
    return; // Explicit return for clarity (optional)
  });

  // Test script of test case: logs in existing user successfully
  it('logs in existing user successfully', () => {
    cy.login(user.email, user.password); // Login with user credentials
    cy.wait(1000); // Wait for UI to reflect changes
    cy.url().should('include', '/dashboard'); // Redirect to dashboard
    return; // Explicit return for clarity (optional)
  });

  // Test script of test case: shows error on invalid login attempt
  it('shows error on invalid login attempt', () => {
    cy.login('wrong@example.com', 'badpassword'); // Login with wrong credentials
    cy.url().should('include', '/auth/login'); //Redirect to login
    cy.contains('Invalid email or password').should('be.visible'); // Show error message
  });

  // Test script of test case: logs out successfully
  it('logs out successfully', () => {
    cy.login(user.email, user.password); // Login with user credentials
    cy.wait(1000); // Wait for UI to reflect changes
    cy.url().should('include', '/dashboard'); // Redirect to dashboard

    cy.logout(); //Logout

    return; // Explicit return for clarity (optional)
    });

});