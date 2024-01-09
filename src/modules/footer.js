import '../css/footer.scss'

export default function createFooter () {
    const footer = document.querySelector("footer")
    footer.appendChild(createMap())
    footer.appendChild(createForm())
    footer.appendChild(createLinkMenu())
}

function createMap() {
    const map = document.createElement("div")
    map.textContent = "Sasuke"
    return map
}

function createForm() {
    const form = document.createElement("form")
    form.textContent = "Naruto"
    return form
}

function createLinkMenu() {
    const menu = document.createElement("menu")
    menu.textContent = "Sakura"
    return menu
}

export function getFooterHeight() {
    const footer = document.querySelector("footer")
    return footer.offsetHeight;
}