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

function renderListItem(type, value) {
    const item = document.createElement('li')
    const dtItem = document.createElement('dt')
    dtItem.textContent = type

    const description = document.createElement('dd')

    try {
        description.appendChild(value)
    } catch(e) {
        description.textContent = value
    }

    item.appendChild(dtItem)
    item.appendChild(description)

    return item
}

function renderList(form) {
    const list = document.createElement('dl')

    const user = {
        'Name:': form.changeThirdHeader.value,
        'Age:': form.age.value,
        'Favorite Color:': renderColor(form.favoriteColor.value),
    }

    Object.keys(user).map(value => {
        const item = renderListItem(value, user[value])
        list.appendChild(item)
    })
    
    return list
}

function handleSubmit(ev) {
    ev.preventDefault()
    //const paragraph = document.querySelector('.header3')
    //paragraph.textContent = document.querySelector('#users').value

    const form = ev.target
    const users = document.querySelector('#users')

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