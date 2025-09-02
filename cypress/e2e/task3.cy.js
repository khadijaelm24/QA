describe('Simple Task Manager — Task Management (Negative Scenarios & Edge Cases)', () => {
  const user = {
    username: `user${Date.now()}`,
    email: `user${Date.now()}@example.com`,
    password: 'Password123!',
  };

  before(() => {
    cy.register(user.username, user.email, user.password);
    cy.login(user.email, user.password);
  });

  it('shows validation error when required field (title) is missing', () => {
    
    // shows validation error when required field (title) is missing

    const incompleteTask = {
      title: '',
      description: 'No title',
      dueDate: '2025-09-05',
      priority: 'High',
    };

    cy.createIncompleteTask(incompleteTask);
    cy.wait(1000);

    // shows error when due date is in the past

    const pastTask = {
      title: 'Past Due Task',
      description: '.',
      dueDate: '2020-01-01',
      priority: 'Medium',
    };

    cy.createTask(pastTask);
    cy.wait(1000);

    // handles very long title and description inputs

    const longInput = {
      title: 'A'.repeat(300),
      description: 'D'.repeat(1000),
      dueDate: '2025-10-01',
      priority: 'Low',
    };

    cy.createTask(longInput);
    cy.wait(1000);

    // allows special characters in title and description
    const specialCharTask = {
      title: '!@#$%^&*()_+{}|:"<>?-=[]\\;\',./`~',
      description: 'Description with emoji 😃🔥🚀 and symbols @#$%',
      dueDate: '2025-11-01',
      priority: 'High',
    };

    cy.createTask(specialCharTask);
    cy.wait(1000);
    
  });
  
});