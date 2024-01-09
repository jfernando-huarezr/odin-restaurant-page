import Banner from '../img/ichiraku.png'
import render from './render'

export default function renderHome () {
    render()
    
    const main = document.querySelector("main")
    const container = document.createElement('div')
    container.classList.add('container')
    container.style.minHeight = main.style.minHeight
    
    const banner = document.createElement('img')
    banner.classList.add('banner')
    banner.src = Banner

    const content = document. createElement('div')
    content.classList.add('content')
    content.textContent = "Welcome to Ichiraku Ramen, the favorite dining spot of Konoha’s number one, hyperactive ninja, Naruto Uzumaki! Nestled in the heart of the Hidden Leaf Village, our humble ramen shop has been serving up delicious bowls of ramen for generations. Our secret-recipe broth and hand-pulled noodles have been praised by Hokages and heroes alike. Whether you’re refueling after a mission or celebrating with friends, Ichiraku Ramen is the place to be. Remember, a bowl of ramen a day keeps the Shadow Clones at bay!"

    container.appendChild(banner)
    container.appendChild(content)
    
    main.appendChild(container)
}
