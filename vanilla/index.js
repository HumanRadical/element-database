import elements from '/periodic-table.json' assert { type: 'json' }

const bodyContainer = document.getElementById('body-container')
const elementContainer = document.getElementById('element-container')
const elementCardContainer = document.getElementById('element-card-container')
const infoContainer = document.getElementById('info-container')
const elementArray = Object.values(elements)

const appendElementCard = element => {
    const card = document.createElement('div')
    card.classList.add('element-card')

    const number = document.createElement('h2')
    number.classList.add('element-card-number')
    number.innerText = element.number

    const image = document.createElement('img')
    image.classList.add('element-card-image')
    image.src = element.image.url

    const symbol = document.createElement('h2')
    symbol.classList.add('element-card-symbol')
    symbol.innerText = element.symbol

    const name = document.createElement('h3')
    name.classList.add('element-card-name')
    name.innerText = element.name

    card.appendChild(number)
    card.appendChild(image)
    card.appendChild(symbol)
    card.appendChild(name)

    card.addEventListener('click', appendInfoCard)

    elementCardContainer.appendChild(card)
}

for (let element of elementArray) {
    appendElementCard(element)
}