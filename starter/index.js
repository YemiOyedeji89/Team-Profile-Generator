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



//createManager();
//myEngineer();

///////////////FUNCTION TO CREATE MANAGER///////////////////
    
inquirer
.prompt([
{   ////EMPLOYEE NAME INPUT
    type: 'input',
    name: 'managerName',
    message: `What is the Manager's name?`,

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
    name: 'managerId',
    message: `What is the Manager's ID number?`,


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
    name: 'managerEmail',
    message: `What is the Manager's email?`,


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


{
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is the Manager Office extention number?',

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
}


])
.then(empDetails => {

    const myTeam = [];
    

    const manager = new Manager(
        empDetails.managerName, 
        empDetails.managerId,
        empDetails.managerEmail,
        empDetails.managerOfficeNumber
    );

    const managerRole = manager.getRole();

    const managerEmp = { role: managerRole, ...manager};
        
    //console.log(managerEmp);
    
    
    myTeam.push(managerEmp);

    //choseEmp();
    console.log(myTeam)

    choseEmp();
    
})






function choseEmp(){

    inquirer
    .prompt([

    {   ////CHOOSE EMPLOYEE TO ADD
        type: 'list',
        name: 'chooseEmpToAdd',
        message: 'Choose another Employee to add?',
        choices: ['Exit','Engineer', 'Intern'],
        
    },

    ]).then(input => {
        if(input.chooseEmpToAdd === "Engineer"){

           // console.log(createEngineer);
           createEngineer();


        }else if(input.chooseEmpToAdd === "Intern"){
        return createIntern();
        }
        
    })
}



///////////////FUNCTION TO CREATE ENGINEER///////////////////

const createEngineer = function myEngineer() 
{

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

        

    {    /// EMPLOYEE GITHUB NUMBER
        type: 'input',
        name: 'github',
        message: 'What is the Employee gitHub UserName?',
    }


    ]) 
    .then((inputData) => {

        const engineer = new Engineer(
            inputData.personName,
            inputData.personId,
            inputData.personEmail,
            inputData.github,
        )

        let engRole = engineer.getRole();

        const engineerEmp = {
            role: engRole, ...engineer
        }
        //myCreateEng.push(engineerEmp);

        const myCreateEng = [engineerEmp];
        choseEmp();

    })

} 











///////////////FUNCTION TO CREATE INTERN///////////////////

function createIntern() {

    

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

        

    {    /// EMPLOYEE SCHOOL
        type: 'input',
        name: 'school',
        message: 'Which did school employee attended?',

        ///VALIDATING EMPLOYEE SCHOOL INPUT
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
    }


    ]) 
    .then((inputData) => {

        const myIntern = [];

      //  console.log(inputData);

        const intern = new Intern(
            inputData.personName,
            inputData.personId,
            inputData.personEmail,
            inputData.school,
        )

        const internRole = intern.getRole();

        const internEmp = {
            role: internRole, ...intern
        }
        myIntern.push(internEmp);

        choseEmp();
    });  

    
} 