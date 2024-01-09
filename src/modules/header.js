import renderHome from './mainHome'
import renderContact from './mainContact'
import renderMenu from './mainMenu'

import '../css/header.scss'
import LogoImg from '../img/logo.png'

export default function createHeader () {
    const content = document.querySelector("header")

    content.appendChild(createLogo())
    content.appendChild(createBrandName())
    content.appendChild(createNavbar())
}

function createLogo() {
    const container = document.createElement('div')
    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src = LogoImg

    container.appendChild(logo)

    return container
}

function createNavbar () {
    const container = document.createElement('div')
    container.classList.add('navbar-container')
    const navbar = document.createElement("ul")

    for(let i = 0; i < 3; i++) {
        const button = document.createElement("button")
        switch (i) {
            case 0: {
                button.textContent = "Home"
                button.addEventListener('click', () => {
                    console.log("home was clicked")
                    renderHome()
                })

                navbar.appendChild(button)
                break;
            }
            case 1: {
                button.textContent = "Menu"
                button.addEventListener('click', () => {
                    console.log("Menu was clicked")
                    renderMenu()
                })

                navbar.appendChild(button)
                break;
            }
            case 2: {
                button.textContent = "Contact"
                button.addEventListener('click', () => {
                    console.log("contact was clicked")
                    renderContact()
                })

                navbar.appendChild(button)
                break;
            }
        }
    }

    container.appendChild(navbar)
    
    return container
}

function createBrandName() {
    const brandName = document.createElement("div")
    brandName.classList.add("brand")
    brandName.textContent = "Ichiraku Ramen"

    return brandName
}

export function getHeaderHeight() {
    const header = document.querySelector("header")
    return header.offsetHeight;
}
