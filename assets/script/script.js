const signUpBtn = document.querySelector('.js-sign-up')
const signInBtn = document.querySelector('.js-sign-in')
const modalSignUp = document.querySelector('.modal')
const modalSignUpClose=document.querySelector('.auth-form__controls-back')
function showFormSignUp() {
    modalSignUp.classList.add('openSignUpForm')
}
function hideFormSignUp() {
    modalSignUp.classList.remove('openSignUpForm')
}

function showFormSignIn() {
    modalSignUp.classList.add('openSignInForm')
}
function hideFormSignIn() {
    modalSignUp.classList.remove('openSignInForm')
}
signInBtn.addEventListener('click',showFormSignIn)
signUpBtn.addEventListener('click', showFormSignUp)
modalSignUpClose.addEventListener('click',hideFormSignUp)