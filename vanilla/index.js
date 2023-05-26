import elements from '/periodic-table.json' assert { type: 'json' }

const elementCardContainer = document.getElementById('element-card-container')
const infoContainer = document.getElementById('info-container')
const elementArray = Object.values(elements)

const appendInfoCard = element => {
    infoContainer.innerHTML = ''
    infoContainer.style.flex = 1

    const card = document.createElement('div')
    card.classList.add('info-card')

    const close = document.createElement('button')
    close.innerText = 'x'
    close.classList.add('info-card-close')
    close.addEventListener('click', () => {
        infoContainer.innerHTML = ''
        infoContainer.style.flex = 0
    })

    const image = document.createElement('img')
    image.classList.add('info-card-image')
    image.src = element.image.url

    const number = document.createElement('h2')
    number.classList.add('info-card-number')
    number.innerText = element.number

    const details = document.createElement('div')
    details.classList.add('info-card-details')

    const symbol = document.createElement('p')
    symbol.innerHTML = `<strong>Symbol:</strong> ${element.symbol}`
    
    const name = document.createElement('p')
    name.innerHTML = `<strong>Name:</strong> ${element.name}`

    const appearance = document.createElement('p')
    appearance.innerHTML = `<strong>Appearance:</strong> ${element.appearance}`

    const phase = document.createElement('p')
    phase.innerHTML = `<strong>Phase at STP:</strong> ${element.phase}`

    const atomic_mass = document.createElement('p')
    atomic_mass.innerHTML = `<strong>Atomic mass:</strong> ${element.atomic_mass}`

    const summary = document.createElement('p')
    summary.innerHTML = `<strong>Summary:</strong> ${element.summary}`

    details.appendChild(symbol)
    details.appendChild(name)
    details.appendChild(appearance)
    details.appendChild(phase)
    details.appendChild(atomic_mass)
    details.appendChild(summary)

    card.appendChild(close)
    card.appendChild(image)
    card.appendChild(number)
    card.appendChild(details)

    infoContainer.appendChild(card)
}

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

    card.addEventListener('click', () => appendInfoCard(element))

    elementCardContainer.appendChild(card)
}

for (let element of elementArray) {
    appendElementCard(element)
}