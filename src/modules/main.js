import { getHeaderHeight } from "./header"
import { getFooterHeight } from "./footer"

export default function createMain() {
    const main = document.querySelector("main")
    const height = getFooterHeight() + getHeaderHeight()
    main.style.minHeight = `calc(100vh - ${height}px`
    main.textContent = "this is main"
}