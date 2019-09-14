import { history } from '../routes/AppRouter.js'

export const goToLogin = async () => {
  history.push(`/login`);
}

export const goToRegister = async () => {
  history.push(`/register`);
}

export const goToHome = () => {
  console.log('going to home');
  history.push(`/`);
}
export const goToDashboard = () => {
  history.push(`/dashboard`);
}

export const goToLogout = () => {
  history.push(`/logout`);
}
export const goToLoginWithLogout = () => {
  history.push(`/login`);
}

export const goToCheckout = () => {
  console.log('going to checkout')
  history.push(`/checkout`)
}
export const goToForm = () => {
  history.push(`/`)
}
export const goToNewAddress = () => {
  history.push(`/newaddress`)
}
export const goToAuth = (replace) => {
  if(replace){
  history.replace('/auth')
  } else {
    history.push(`/auth`)
  }
}
export const goToConfirmPayment = () => {
  history.push('/payment')
}