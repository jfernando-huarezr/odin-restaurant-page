import render from "./render";
import shoyu from '../img/shoyu.jpeg'
import miso from '../img/miso.jpeg'
import tonkotsu from '../img/tonkotsu.jpeg'
import shio from '../img/shio.jpeg'

export default function renderMenu() {

    const mainDishes = [
      {
        name: 'Shoyu Ramen',
        description: 'Shoyu, or soy sauce, ramen uses soy sauce as its main seasoning.',
        pictureUrl: shoyu,
      },

      {
        name: 'Miso Ramen',
        description: 'Miso ramen is based on miso. This creates a thick, rich, and deep umami flavor in the broth. Miso ramen is often based on chicken stock.',
        pictureUrl: miso
      },

      {
        name: 'Tonkotsu Ramen',
        description: 'Tonkotsu ramen is one of the most popular and well-known styles of ramen nowadays. The name refers to pork bones, the basis of the stock and the predominant flavor.',
        pictureUrl: tonkotsu
      },

      {
        name: 'Shio Ramen',
        description: 'Shio ramen is the oldest and perhaps simplest style of ramen broth, with mainly salt seasoning.',
        pictureUrl: shio   
      }
    ]

    render()

    const main = document.querySelector("main")

    const title = document.createElement('p')
    title.textContent = 'Our Menu'
    title.style.textAlign = 'center'
    title.style.paddingTop = '15px'
    title.style.fontSize = '30px'
    title.style.color = 'red'

    const container = document.createElement('div')
    container.classList.add('menu')
    container.style.minHeight = main.style.minHeight

    main.appendChild(title)

    for (let i=0; i<mainDishes.length; i++) {
        const dish = document.createElement('div')
        dish.classList.add('dish')

        const imgDish = document.createElement('img')
        imgDish.src = mainDishes[i].pictureUrl

        const nameDish = document.createElement('h3')
        nameDish.textContent = mainDishes[i].name

        const descriptionDish = document.createElement('p')
        descriptionDish.textContent = mainDishes[i].description

        dish.appendChild(nameDish)
        dish.appendChild(imgDish)
        dish.appendChild(descriptionDish)

        container.appendChild(dish)
    }
    
    
    main.appendChild(container)

}
