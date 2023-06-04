import { preventDefaultDecorator } from "./decorators.js"
import { toggleHidden } from "./utils.js"
import { validateName } from "./validate.js"

/**
 * REGISTER
 */
const registerForm = document.getElementById('register-form')
const registerButton = document.getElementById('register-button')
const registerToLogin = document.getElementById('register-to-login')
const registerContainer = document.getElementById('register-container')

/**
 * LOGIN
 */
const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-button')
const loginContainer = document.getElementById('login-container')
const loginToRegister = document.getElementById('login-to-register')

/**
 * GLOBAL EVENTS
 */
const switchContainer = () => {
    toggleHidden(loginContainer)
    toggleHidden(registerContainer)
}

/**
 * REGISTER EVENTS 
 */
let onSubmitRegisterForm = (e) => {
    if(e.target !== registerButton) return
    const [name] = document.getElementsByName("name")
    validateName(name.value)
    
    console.log('Submit register',{e})
}

let onClickRegisterButton = (e) => {
    console.log("Register button press", {e})
}

let onClickRegisterToLogin = (e) => {
    switchContainer()
    console.log('Switch to login modal', {e})
}

onSubmitRegisterForm = preventDefaultDecorator(onSubmitRegisterForm)
onClickRegisterButton = preventDefaultDecorator(onClickRegisterButton)
onClickRegisterToLogin = preventDefaultDecorator(onClickRegisterToLogin)
registerForm.addEventListener('click', onSubmitRegisterForm)
registerButton.addEventListener('click', onClickRegisterButton)
registerToLogin.addEventListener('click', onClickRegisterToLogin)



/**
 * LOGIN EVENTS 
 */

let onSubmitLoginForm = e => {
    if(e.target !== onClickLoginButton) return;
    console.log('Submit Login', {e})
}

let onClickLoginButton = e => {
    console.log('Login event', {e})
}

let onClickLoginToRegister = e => {
    switchContainer()
    console.log('Switch login to register', {e})
}

onSubmitLoginForm = preventDefaultDecorator(onSubmitLoginForm)
onClickLoginButton = preventDefaultDecorator(onClickLoginButton)
onClickLoginToRegister = preventDefaultDecorator(onClickLoginToRegister)
loginForm.addEventListener('click', onSubmitLoginForm)
loginButton.addEventListener('click', onClickLoginButton)
loginToRegister.addEventListener('click', onClickLoginToRegister)