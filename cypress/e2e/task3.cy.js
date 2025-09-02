describe('Simple Task Manager — Task Management (Negative Scenarios & Edge Cases)', () => {
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

  /**
   * Test Case: Validate negative scenarios and edge cases during task creation
   * This includes:
   * 1. Missing required title field
   * 2. Due date in the past
   * 3. Extremely long title and description inputs
   * 4. Special characters in title and description
   */
  it('shows validation error when required field (title) is missing', () => {
    
    // Case 1: shows validation error when required field (title) is missing

    const incompleteTask = {
      title: '', // Title left empty to trigger validation
      description: 'No title', // Description provided
      dueDate: '2025-09-05', // Valid future dat
      priority: 'High', // Valid priority
    };

    cy.createIncompleteTask(incompleteTask); // Attempt to create task without a title
    cy.wait(1000); // Wait for UI to reflect changes

    // Case 2: shows error when due date is in the past

    const pastTask = {
      title: 'Past Due Task', // Valid title
      description: '.', // Description provided
      dueDate: '2020-01-01', // Invalid past date
      priority: 'Medium', // Valid priority
    };

    cy.createTask(pastTask); // Attempt to create task with past due date
    cy.wait(1000); // Wait for UI to reflect changes

    // Case 3: handles very long title and description inputs

    const longInput = {
      title: 'A'.repeat(300),  // Extremely long title (300 chars)
      description: 'D'.repeat(1000), // Extremely long description (1000 chars)
      dueDate: '2025-10-01', // Valid future date
      priority: 'Low', // Valid priority
    };

    cy.createTask(longInput); // Attempt to create task with very long title and description inputs
    cy.wait(1000); // Wait for UI to reflect changes

    //Case 4: allows special characters in title and description
    const specialCharTask = {
      title: '!@#$%^&*()_+{}|:"<>?-=[]\\;\',./`~', // Special characters in title
      description: 'Description with emoji 😃🔥🚀 and symbols @#$%', // Emojis and symbols in description
      dueDate: '2025-11-01', // Valid future date
      priority: 'High', // Valid priority
    };

    cy.createTask(specialCharTask); // Attempt to create task with special characters
    cy.wait(1000); // Wait for UI to reflect changes
    
  });
  
});