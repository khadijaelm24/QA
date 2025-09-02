describe('Simple Task Manager — Task Management (CRUD Happy Paths)', () => {
  // A constant variable representing a user was used in the following tests for Task 2
  const user = {
    username: `user${Date.now()}`, // Dynamically generate a unique username
    email: `user${Date.now()}@example.com`, // Dynamically generate a unique email
    password: 'Password123!', // Strong password for the user
  };

  /**
   * before() hook:
   * - Registers the user
   * - Logs in the user before running the CRUD tests
   */

  before(() => {
    cy.register(user.username, user.email, user.password);
    cy.login(user.email, user.password);
  });

  // Define a task object with details for creating a new task
  const task = {
    title: `Task ${Date.now()}`, // Unique title for the task
    description: 'This is a test task created by Cypress', // Task description
    dueDate: '2025-09-04', // Original due date
    priority: 'High', // Initial priority level
    twoDaysLater: '2025-09-06' // Updated due date for editing the task
  };

  /**
   * Test Case: Automate core task CRUD operations
   * Steps:
   * 1. Create a new task
   * 2. Edit the task with updated details
   * 3. Toggle task completion status
   * 4. Delete the task
   */
  it('Automate core task CRUD operations', () => {
    // Step 1: Create a new task using custom Cypress command
    cy.createTask(task);

    // Prepare updated details for the edit operation
    const updated = {
      title: task.title, // Original task title
      newTitle: `${task.title}-Updated`, // Updated task title
      newDescription: 'Updated description', // Updated task description
      newDueDate: task.twoDaysLater, // Updated due date
      newPriority: 'Low', // Updated priority level
    };

    // Step 2: Edit the existing task
    cy.editTask({ ...updated }); // Update Task
    cy.wait(1000); // Wait for UI to reflect changes

    // Step 3: Toggle completion status of the updated task
    cy.toggleTaskCompletion(updated.title);// Update Completion Status of a Task
    cy.wait(3000); // Allow time for the status change

    // Step 4: Delete the updated task
    cy.deleteTask(updated.title); // Delete Task
    cy.wait(3000); // Ensure deletion is processed before ending test
    return; // Explicit return for clarity (optional)
  });
});
