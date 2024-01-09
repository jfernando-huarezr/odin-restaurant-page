import '../css/general.scss'

import createHeader from "../modules/header"
import createFooter from '../modules/footer'
import createMain from "../modules/main"



export default function createHome () {

    const content = document.querySelector("#content")

    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")

    content.appendChild(header)
    content.appendChild(main)
    content.appendChild(footer)

    createHeader()

    createFooter()

    createMain()
}

