const validator = require("validator");
const emailValidator = require("email-validator");


class Validate{

    constructor(input){

        this.input = input;
    };

    //VALIDATING NAME INPUT FIELD
    vaidateName(input, isValid){

        this.input = input

        if(!validator.isAlpha(input, 'en-US', {ignore: ' -'}) || input === " "){
            
            isValid = false;
        }
        return isValid;
    };

    
    ///VALIDATING ID FIELD TO MINIMUN OF LENGTH OF 4
    validateId(input, isValidNum){

        this.input = input;


        let inputLength = input.length

        if( (inputLength < 4)){

            isValidNum = false;

            return isValidNum;

        }else if(inputLength >= 4) {

            if(!validator.isNumeric(input)){

                isValidNum = false;
            }
            return isValidNum;
        }
        
        
    };


    ///VALIDATING EMAIL FIELD
    validateEmail(input, isValidEmail){

        this.input = input;

        const verifyEmail = emailValidator.validate(input)
        
        if(!verifyEmail){

            isValidEmail = false;
        }
        return isValidEmail;
    };



}
module.exports = Validate;