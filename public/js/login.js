import { preventDefaultDecorator } from "./decorators.js"
import { switchContainer } from "./utils.js"
import { FormFields } from "./validate.js"

const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-button')
const loginContainer = document.getElementById('login-container')
const loginToRegister = document.getElementById('login-to-register')
const registerContainer = document.getElementById('register-container')

let onSubmitLoginForm = e => {
    if(e.target !== onClickLoginButton) return;
    console.log('Submit Login', {e})
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