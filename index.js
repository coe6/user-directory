//console.log('It works!')

function changeText(ev) {
    if(ev.target.textContent === 'Change First Header!') {
        const paragraph = document.querySelector('.header1')
        paragraph.textContent = "USER DIRECTORY"
    } else if(ev.target.textContent === 'Change Second Header!') {
        const paragraph = document.querySelector('.header2')
        paragraph.textContent = "SECOND HEADER"
    }
}

function renderColor(favColor) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favColor
    colorDiv.style.width = '7rem'
    colorDiv.style.height = '2rem'

    return colorDiv
}

function renderListItem(form) {
    const nameItem = document.createElement('li')
    const ageItem = document.createElement('li')
    const colorItem = document.createElement('li')

    nameItem.textContent = `Name: ${form.changeThirdHeader.value}`
    ageItem.textContent = `Age: ${form.age.value}`
    colorItem.textContent = `Favorite Color: `

    const elements = [nameItem, ageItem, colorItem]
    return elements
}

function renderList(form) {
    const list = document.createElement('ul')
    const elements = renderListItem(form)
    elements[2].appendChild(renderColor(form.favoriteColor.value))
    list.appendChild(elements[0])
    list.appendChild(elements[1])
    list.appendChild(elements[2])
    
    return list
}

function handleSubmit(ev) {
    ev.preventDefault()
    console.log("here")
    //const paragraph = document.querySelector('.header3')
    //paragraph.textContent = document.querySelector('#users').value

    const form = ev.target
    const userName = form.changeThirdHeader.value
    const users = document.querySelector('#users')

    const favColor = form.favoriteColor.value

    users.appendChild(renderList(form))

    // users.innerHTML += `<p>${userName}, ${form.age.value}</p>`
    form.reset()
    form.changeThirdHeader.focus()
}

const button = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
//const button3 = document.querySelector('#button3')
const form1 = document.querySelector('form#textInput')

button.addEventListener('click', changeText)
button2.addEventListener('click', changeText)
//button3.addEventListener('click', changeText)
form1.addEventListener('submit', handleSubmit)