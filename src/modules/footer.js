export default function createFooter () {
    const footer = document.querySelector("footer")
    footer.appendChild(createMap())
    footer.appendChild(createForm())
    footer.appendChild(createLinkMenu())
}

function createMap() {
    const map = document.createElement("div")
    map.textContent = "Mapita"
    return map
}

function createForm() {
    const form = document.createElement("form")
    form.textContent = "formulario"
    return form
}

function createLinkMenu() {
    const menu = document.createElement("menu")
    menu.textContent = "Menucito"
    return menu
}

export function getFooterHeight() {
    const footer = document.querySelector("footer")
    return footer.offsetHeight;
}