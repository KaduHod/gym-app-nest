import { preventDefaultDecorator } from "./decorators.js"
import { switchContainer } from "./utils.js"
import { FormFields } from "./validate.js"

/**
 * REGISTER
 */
 const registerForm = document.getElementById('register-form')
 const registerButton = document.getElementById('register-button')
 const registerToLogin = document.getElementById('register-to-login')
 const registerContainer = document.getElementById('register-container')
 const loginContainer = document.getElementById('login-container')

 let onSubmitRegisterForm = (e) => {
    if(e.target !== registerButton) return
    const fields = new FormFields(registerForm)
    fields.resetErrors();

    const {
        name, 
        username, 
        email, 
        password, 
        passwordconf, 
        cellphone, 
        birthdate
    } = fields.objFields;
    
    const nameValidations = fields.validateAllFromField(name,[
        [
            validator.isEmpty, 
            `Name must not me empty`,
            false
        ],
        [
            validator.isLength,
            `Name must have at between 5 and 20 characters`,
            true,
            {min:5, max:20}
        ]
    ])

    const userNameValidations = fields.validateAllFromField(username,[
        [
            validator.isEmpty, 
            `Username must not me empty`,
            false
        ],
        [
            validator.isLength,
            `Username must have at between 5 and 20 characters`,
            true,
            {min:5, max:20}
        ]
    ])

    const emailValidations = fields.validateAllFromField(email,[
        [
            validator.isEmail,
            `Email must be a valid email`,
            true
        ],
        [
            validator.isEmpty,
            `Email must not be empty`,
            false
        ]
    ]) 
    
    const passwordValidationOptions = {
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minNumbers:0,
        minSymbols:1
    }

    const passwordValidation = fields.validateAllFromField(password,[
        [
            validator.isStrongPassword,
            "Password must have at lest 6 carachters, 1 uppercase letter, 1 lowercase letter and 1 special caracter",
            true,
            passwordValidationOptions
        ]
    ])

    const passwordconfValidation = fields.validateAllFromField(passwordconf,[
        [
            (pass, conf) => pass === conf, 
            "Passwords do not match",
            true,
            password.value
        ]
    ])

    const cellphoneValidation = fields.validateAllFromField(cellphone,[
        [
            validator.isEmpty,
            `Cellphone must not be empty`,
            false
        ],
    ])

    const birthdateValidation = fields.validateAllFromField(birthdate,[
        [
            validator.isEmpty,
            `Birthdate must not be empty`,
            false
        ],
        [
            (date) => !isNaN(new Date(date)),
            "Birthdate must be a valid date",
            true
        ]
    ])
    
    const messages = [nameValidations, userNameValidations, emailValidations, passwordValidation, passwordconfValidation, cellphoneValidation, birthdateValidation];

    if(messages.length) {
        fields.displayErrors(messages)
    }
}

let onClickRegisterButton = (e) => {
    console.log("Register button press", {e})
}

let onClickRegisterToLogin = (e) => {
    switchContainer([loginContainer, registerContainer])
    console.log('Switch to login modal', {e})
}

onSubmitRegisterForm = preventDefaultDecorator(onSubmitRegisterForm)
onClickRegisterButton = preventDefaultDecorator(onClickRegisterButton)
onClickRegisterToLogin = preventDefaultDecorator(onClickRegisterToLogin)
registerForm.addEventListener('click', onSubmitRegisterForm)
registerButton.addEventListener('click', onClickRegisterButton)
registerToLogin.addEventListener('click', onClickRegisterToLogin)