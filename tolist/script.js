const navlinks = document.getElementById("nav-links")
const menu = document.getElementById("hamburger")

menu.addEventListener('click', () => {
    navlinks.classList.toggle('hidden')
})