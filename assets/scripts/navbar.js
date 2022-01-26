console.log("nav bar script loaded")
const toggleButton = document.getElementsByClassName('navbar-mtoggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//get the scroolheight of the navbar-links and set it as the max height.

//on button click, set button and navbarlinks to active
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('active')
})

// 