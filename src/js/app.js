const hamburgerIcon = document.querySelector('.navbar__hamburger')
const navbarList = document.querySelector('.navbar__list')

hamburgerIcon.addEventListener('click', () => {
    navbarList.classList.toggle('open')
})