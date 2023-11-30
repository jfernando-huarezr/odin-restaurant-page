
import LogoImg from '../img/logo.png'

export default function createHeader () {
    const content = document.querySelector("header")

    content.appendChild(createLogo())
    content.appendChild(createBrandName())
    content.appendChild(createNavbar())
}

function createLogo() {
    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src = LogoImg

    return logo
}

function createNavbar () {
    const navbar = document.createElement("ul")

    for(let i = 0; i < 3; i++) {
        const button = document.createElement("button")
        switch (i) {
            case 0: {
                button.textContent = "Home"
                button.addEventListener('click', () => {
                    console.log("home was clicked")
                })

                navbar.appendChild(button)
                break;
            }
            case 1: {
                button.textContent = "Menu"
                button.addEventListener('click', () => {
                    console.log("Menu was clicked")
                })

                navbar.appendChild(button)
                break;
            }
            case 2: {
                button.textContent = "Contact"
                button.addEventListener('click', () => {
                    console.log("contact was clicked")
                })

                navbar.appendChild(button)
                break;
            }
        }
    }
    
    return navbar
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