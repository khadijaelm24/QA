# QA

This section explains how to install and run Cypress tests for this project.

## Reports
Here is the link to access to **Test Execution Report**:
https://github.com/khadijaelm24/QA/blob/main/Test%20Execution%20Report.pdf 
 
--- 

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## Install Cypress

If Cypress is not yet installed in your project, install it as a **dev dependency**:

First, run this command:

```npm init -y```

Then run this:

```npm install cypress --save-dev```

---

## Run Cypress Tests

Once Cypress is installed, you can open the Cypress Test Runner using:

``` npx cypress open```

This command will launch automatically the Cypress GUI where you can run your tests in an interactive mode, as demonstrated below:

<img src="README Images/Pic1.png">

Then you click at E2E Testing to configure it and choose at next the browser where E2E Tests will be run. At next, you click at **Start E2E Testing in [Chosen Browser Name]** (For my case I chose **Edge**, so I clicked on titled button: **Start E2E Testing in Edge**)

<img src="README Images/Pic2.png">

Next, you will be redirected to this page, where all specs are listed:

<img src="README Images/Pic3.png">

If you want execute tests of **Task 1**, kindly access to **task1.cy.js**, and if you want execute tests of **Task 2**, kindly access to **task2.cy.js**, and if you want execute tests of **Task 3**, kindly access to **task3.cy.js**.

Here is example of executed tests (or the case of **Task 1**):

<img src="README Images/Pic4.png">

## Cypress Folder Structure

By default, Cypress creates the following structure inside the **cypress/** folder:

cypress/

  ├── e2e/           # End-to-end test files

  ├── fixtures/      # Test data (mock data, JSON files)
  
  ├── support/       # Commands and configuration files

---

## Important Note

The execution of the tests for the 3 tasks has already been verified. If you encounter an issue related to an input not being automatically filled (in register or login), kindly refresh the page to avoid test execution failures.