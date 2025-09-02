describe('Simple Task Manager — Task Management (CRUD Happy Paths)', () => {
  const user = {
    username: `user${Date.now()}`,
    email: `user${Date.now()}@example.com`,
    password: 'Password123!',
  };

  before(() => {
    cy.register(user.username, user.email, user.password);
    cy.login(user.email, user.password);
  });

  const task = {
    title: `Task ${Date.now()}`,
    description: 'This is a test task created by Cypress',
    dueDate: '2025-09-04',
    priority: 'High',
    twoDaysLater: '2025-09-06'
  };

  it('Automate core task CRUD operations', () => {
    cy.createTask(task);
    
    const updated = {
      title: task.title,
      newTitle: `${task.title}-Updated`,
      newDescription: 'Updated description',
      newDueDate: task.twoDaysLater,
      newPriority: 'Low',
    };

    cy.editTask({ ...updated });
    cy.wait(1000);

    cy.toggleTaskCompletion(updated.title);
    cy.wait(3000);

    cy.deleteTask(updated.title);
    cy.wait(3000);
    return;
  });
});
