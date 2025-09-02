describe('Simple Task Manager — Authentication Flows', () => {
  const user = {
    username: `user${Date.now()}`,
    email: `user${Date.now()}@example.com`,
    password: 'Password123!',
  };

  it('registers and then logs in a new user successfully', () => {
    cy.register(user.username, user.email, user.password);
    cy.url().should('include', '/auth/login');
    cy.wait(1000);
    cy.login(user.email, user.password);
    cy.url().should('include', '/dashboard');
    return;
  });

  it('logs in existing user successfully', () => {
    cy.login(user.email, user.password);
    cy.wait(1000);
    cy.url().should('include', '/dashboard');
    return;
  });

  it('shows error on invalid login attempt', () => {
    cy.login('wrong@example.com', 'badpassword');
    cy.url().should('include', '/auth/login');
    cy.contains('Invalid email or password').should('be.visible');
  });

  it('logs out successfully', () => {
    cy.login(user.email, user.password);
    cy.wait(1000);
    cy.url().should('include', '/dashboard');

    cy.logout(); 

    return;
    });

});