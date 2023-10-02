
const menuBar = document.getElementById('menuBar')
const navBar = document.querySelector('.navBar')
const searchForm = document.querySelector('.searchForm')
const searchBar = document.getElementById('searchBar')
const closeContentInfo = document.getElementById('closeContentInfo')
const userIcon = document.getElementById('userIcon')
const infoCircle = document.getElementById('infoCircle')
const loginForm = document.querySelector('.login-form')
const contactInfo = document.querySelector('.contact-info')

menuBar.onclick = () =>{
    menuBar.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}
   

searchBar.onclick = () => {
    searchForm.classList.toggle('active-2')
    loginForm.classList.remove('formUser')
    contactInfo.classList.remove('active-info')
}

userIcon.onclick = () => {
    loginForm.classList.toggle('formUser')
    searchForm.classList.remove('active-2')
    contactInfo.classList.remove('active-info')
}

infoCircle.onclick = () => {
    contactInfo.classList.toggle('active-info')
    loginForm.classList.remove('formUser')
    searchForm.classList.remove('active-2')
}
closeContentInfo.onclick = () => {
    contactInfo.classList.remove('active-info')
}
window.onscroll = () =>{
    navBar.classList.remove('active')
    searchBar.classList.remove('active-2')
    menuBar.classList.remove('bx-x')
    loginForm.classList.remove('formUser')
    contactInfo.classList.remove('active-info')
}