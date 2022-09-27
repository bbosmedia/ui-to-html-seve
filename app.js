const menubtn = document.querySelector('.toggle-btn')
const menu = document.querySelector('.nav-menu')

menubtn.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    menubtn.classList.toggle('active')
})