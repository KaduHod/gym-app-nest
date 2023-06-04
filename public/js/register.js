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
const spinModal = document.getElementById("register-spin")
const messageContainer = document.getElementById('message-container')

const validate = () => {
    const fields = new FormFields(registerForm)
    fields.resetErrors();

    const {
        name, 
        nickname, 
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

    const userNameValidations = fields.validateAllFromField(nickname,[
        [
            validator.isEmpty, 
            `nickname must not me empty`,
            false
        ],
        [
            validator.isLength,
            `nickname must have at between 5 and 20 characters`,
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
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:0,
        minSymbols:1
    }

    const passwordValidation = fields.validateAllFromField(password,[
        [
            validator.isStrongPassword,
            "Password must have at lest 6 caracters, 1 uppercase letter, 1 lowercase letter and 1 special caracter",
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
        [
            (value) => /^\d{2,3} \d{4,5}-\d{4}$/.test(value),
            "Cellphone must be valid (021 9999-4444)",
            true
        ]
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

    const messagesFlat = messages.map(({messages}) => messages).flat()
    
    if(messagesFlat.length) {
        fields.displayErrors(messages)
        return false
    }

    return true
}

let onSubmitRegisterForm = async (e) => {
    if(e.target !== registerButton) return
    const fields = new FormFields(registerForm)
    // const valid = validate();

    // if(!valid) return;

    const {userType, ...body} = fields.getData()

    const route = `${window.location.href}${userType}` 
    
    const bodyMock = {
        birthdate: "1998-10-12",
        cellphone: "041 99999-4444",
        email: "Carl324osjr.app2e@gmail.com",
        name: "CARLOS ALBERTO ",
        password: "Senha123!",
        passwordconf: "Senha123!",
        nickname: "carlosadsjrs"
    }

    const request = await fetch(route, {
        method: 'POST',
        headers: {
            'Content-type':"application/json"
        },
        body: JSON.stringify(bodyMock)
    })

    spinModal.classList.toggle('hidden')

    setTimeout(async () => {
        const response = await request.json()
        console.log(response)
        if(request.status < 299) {
            registerToLogin.click()
            messageContainer.innerHTML = 'Registered! Now you can log in.'
            messageContainer.classList.remove('hidden')
        }
        spinModal.classList.toggle('hidden')
    }, 1000 * 1)   

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