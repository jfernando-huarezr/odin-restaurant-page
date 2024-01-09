import { getHeaderHeight } from "./header"
import { getFooterHeight } from "./footer"
import renderHome from "./mainHome"

import '../css/main.scss'


export default function createMain() {
    
    const main = document.querySelector("main")
    const height = getFooterHeight() + getHeaderHeight()
    main.style.minHeight = `calc(100vh - ${height}px)`
    renderHome()
}

