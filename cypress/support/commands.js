// Register
Cypress.Commands.add('register', (username, email, password) => {
  cy.visit('/auth/register');

  cy.get('input[name="username"]')
    .should('be.visible')
    .type(username, { delay: 0 });

  cy.get('input[name="email"]')
    .should('be.visible')
    .type(email, { delay: 0 })
    .invoke('val')
    .should('eq', email);

  cy.get('input[name="password"]')
    .should('be.visible')
    .type(password, { delay: 0 });

  cy.get('button[type="submit"]')
    .should('be.visible')
    .click();
});

// Login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/auth/login');

  cy.get('input[name="email"]')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type(email, { delay: 0 })
    .should('have.value', email); 

  cy.get('input[name="password"]')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type(password, { delay: 0 });

  cy.get('button[type="submit"]')
    .should('be.visible')
    .click();
});

// Access to Dashboard
Cypress.Commands.add('dashboard', () => {
  cy.visit('/dashboard');
});

// Logout
Cypress.Commands.add('logout', () => {
  cy.get('button[data-collapse-toggle="navbar-default"]')
    .should('exist')
    .click();

  cy.contains('button', 'Logout')
    .should('be.visible')
    .click();
  
  cy.visit('/');
});

// Create Task and confirm its creation
Cypress.Commands.add('createTask', ({ title, description, dueDate, priority }) => {
  cy.get('input[id="title"]').should('be.visible').type(title, { delay: 0 });
  cy.get('textarea[id="description"]').should('be.visible').type(description, { delay: 0 });
  
  cy.get('input[id="dueDate"]')
    .should('be.visible')
    .type(dueDate, { delay: 0 });

  cy.get('select[id="priority"]').should('be.visible').select(priority);

  cy.get('button[type="submit"]')
    .should('be.visible')
    .contains('Add Task')
    .click();

  cy.contains('h3', title).should('be.visible');
});

// Edit Task
Cypress.Commands.add('editTask', ({ title, newTitle, newDescription, newDueDate, newPriority }) => {
  cy.contains('Edit').click();

  if (newTitle) {
    cy.get('input[id="edit-title"]').clear().type(newTitle, { delay: 0 });
  }
  if (newDescription) {
    cy.get('textarea[id="edit-description"]').clear().type(newDescription, { delay: 0 });
  }
  if (newDueDate) {
    cy.get('input[id="edit-dueDate"]').clear().type(newDueDate, { delay: 0 });
  }
  if (newPriority) {
    cy.get('select[id="edit-priority"]').select(newPriority);
  }

  cy.get('button').contains('Save Changes').click();
});

// Toggle Task Completion
Cypress.Commands.add('toggleTaskCompletion', (title) => {
  cy.contains('Mark Complete').click();
});

// Delete Task
Cypress.Commands.add('deleteTask', (title) => {
  cy.contains('Mark Incomplete').click();
  cy.contains('Delete').click();
  cy.on('window:confirm', (message) => {
    expect(message).to.contain('Are you sure you want to delete this task?'); 
    return true; 
  });
});

// Create Task and confirm its creation
Cypress.Commands.add('createIncompleteTask', ({ title, description, dueDate, priority }) => {

  cy.get('textarea[id="description"]').should('be.visible').type(description, { delay: 0 });
  
  cy.get('input[id="dueDate"]')
    .should('be.visible')
    .type(dueDate, { delay: 0 });

  cy.get('select[id="priority"]').should('be.visible').select(priority);
  
  cy.get('button[type="submit"]')
    .should('be.visible')
    .contains('Add Task')
    .click();
});