const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const validate = require('./lib/validation');

const myTeam = [];
// TODO: Write Code to gather information about the development team members, and render the HTML file.
/* function myPrompt() {

} */

inquirer
.prompt([
    {   ////EMPLOYEE NAME INPUT
        type: 'input',
        name: 'personName',
        message: 'What is the Employee name?',

        ///VALIDATING EMPLOYEE NAME INPUT
        validate: (input) => {

            let isValid;

           const validateNameInput = new validate(input); 
           const inputIsValid = validateNameInput.vaidateName(input, isValid);
           

            if (inputIsValid === false){

                return 'please enter a valid name'
            }else {
                isValid = true;
                return isValid;
            }
        }
    },

    {    ////EMPLOYEE ID INPUT
        type: 'input',
        name: 'personId',
        message: 'What is the Employee ID number?',


         //VALIDATING EMPLOYEE ID INPUT
        validate: (input)=> {

            let isValidNum;
            
            const validateIdInput = new validate(input);
            const inputIsValidId = validateIdInput.validateId(input, isValidNum);

            if(inputIsValidId === false){

                return 'Please enter numbers only min of 4'

            }else{
                isValidNum = true;
                return isValidNum;
            };
        }
    },


    {    ////EMPLOYEE EMAIL INPUT
        type: 'input',
        name: 'personEmail',
        message: 'What is the Employee email?',


         //VALIDATING EMPLOYEE EMAIL INPUT
        validate: (input)=> {

            let isValidEmail;
            const validateEmailInput = new validate(input);
            const inputIsValidEmail = validateEmailInput.validateEmail(input, isValidEmail);

            if(inputIsValidEmail === false){

                return 'Please enter a valid email'

            }else{
                isValidEmail = true;
                return isValidEmail;
            };
        }
        
    },

    
    {   ////EMPLOYEE ROLE TO SELECT
        type: 'list',
        name: 'roles',
        message: 'Select employee Role?',
        choices: [ 'Manager', 'Engineer', 'Intern']
    }


    

]).then((empDetails) => {

    console.log(empDetails);

    myTeam.push(empDetails);

    
    
});

console.log(myTeam);
