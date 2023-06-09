import { preventDefaultDecorator } from "./decorators.js"
import { switchContainer } from "./utils.js"
import { FormFields } from "./validate.js"

const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-button')
const loginContainer = document.getElementById('login-container')
const loginToRegister = document.getElementById('login-to-register')
const registerContainer = document.getElementById('register-container')
const loginToken = document.getElementById('login-token')

let validateLogin = () => {
    const fields = new FormFields(loginForm)
    fields.resetErrors();
    const {email, password} = fields.objFields

    const validateEmail = fields.validateAllFromField(email,[
        [
            validator.isEmail,
            "Email must be valid",
            true
        ],
        [
            validator.isEmpty,
            'Email must not be empty',
            false
        ]
    ])

    const validatePassword = fields.validateAllFromField(password,[
        [
            validator.isEmpty,
            'Password must not be empty',
            false
        ]
    ])

    const messages = [validateEmail, validatePassword];

    const messagesFlat = messages.map(({messages}) => messages).flat()
    
    if(messagesFlat.length) {
        fields.displayErrors(messages)
        return false
    }

    return true
}

let onSubmitLoginForm = async e => {
    if(e.target !== loginButton) return;
    const valid = validateLogin()

    if(!valid) return;

    loginForm.submit();
}

let onClickLoginButton = e => {
    console.log('Login event', {e})
}

let onClickLoginToRegister = e => {
    switchContainer([loginContainer, registerContainer])
    console.log('Switch login to register', {e})
}

onSubmitLoginForm = preventDefaultDecorator(onSubmitLoginForm)
onClickLoginButton = preventDefaultDecorator(onClickLoginButton)
onClickLoginToRegister = preventDefaultDecorator(onClickLoginToRegister)
loginForm.addEventListener('click', onSubmitLoginForm)
loginButton.addEventListener('click', onClickLoginButton)
loginToRegister.addEventListener('click', onClickLoginToRegister)