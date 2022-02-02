Steps on how to run the tests:
 1- open the folder in VS code.
 2- open the terminal and start installing the dependencies:
    npm install 
 3- write './node_modules/.bin/cypress run' or 'npx cypress open' to run the cypress in the background
 4- head to folder cypress/integration where you will find the 3 test cases
    - verify image loading
    - verify loading text and button
    - verify loading products