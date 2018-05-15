//console.log('It works!')

function changeText(ev) {
    if(ev.target.textContent === 'Change Header!') {
        const paragraph = document.querySelector('.header1')
        paragraph.textContent = "USER DIRECTORY"
    } else if(ev.target.textContent === 'Change Second Header!') {
        const paragraph = document.querySelector('.header2')
        paragraph.textContent = "SECOND HEADER"
    }
}

function handleSubmit(ev) {
    ev.preventDefault()
    //const paragraph = document.querySelector('.header3')
    //paragraph.textContent = document.querySelector('#users').value

    const form = ev.target
    const userName = form.changeThirdHeader.value
    const users = document.querySelector('#users')

    const favColor = form.favoriteColor.value

    const list = document.createElement('ul')
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`
    list.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${form.age.value}`
    list.appendChild(ageItem)

    const colorItem = document.createElement('li')
    colorItem.textContent = `Favorite Color: `

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favColor
    colorDiv.style.width = '4rem'
    colorDiv.style.height = '2rem'
    colorItem.appendChild(colorDiv)
    list.appendChild(colorItem)

    users.appendChild(list)

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