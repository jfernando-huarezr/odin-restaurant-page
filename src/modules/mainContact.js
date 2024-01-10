import render from "./render";

export default function renderContact () {
    render()

    const main = document.querySelector("main")

    const title = document.createElement('p')
    title.textContent = 'CONTACT'
    title.style.textAlign = 'center'
    title.style.paddingTop = '15px'
    title.style.fontSize = '30px'
    title.style.color = 'red'

    const container = document.createElement('div')
    container.classList.add('contact')
    container.style.minHeight = main.style.minHeight

    main.appendChild(title)

    const info = document.createElement('div')
    info.classList.add('info')

    info.innerHTML = `
    <h2>Hours</h2>

    <ul>
        <li>Tuesday: 12:00 - 22:00</li>
        <li> Wednesday: 12:00 - 22:00</li>
        <li>Thursday: 12:00 - 22:00</li>
        <li>Friday: 12:00 - 23:30</li>
        <li>Saturday: 12:00 - 23:30</li>
        <li>Sunday: 12:00 - 23:30</li>
        <li></li>
    </ul>

    <h2>Contact Us</h2>
    <ul>
        <li>p: 123-456-7890</li>
        <li>e: ramen@ichiraku.com</li>
    </ul>
   
    `

    main.appendChild(info)

}
