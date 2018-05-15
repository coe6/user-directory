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
    // const paragraph = document.querySelector('.header3')
    // paragraph.textContent = document.querySelector('#users').value
    const form = ev.target
    const userName = form.changeThirdHeader.value
    const users = document.querySelector('#users')
    document.getElementById("changeThirdHeader").value = ''
    users.textContent += ' ' + userName
}

const button = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
//const button3 = document.querySelector('#button3')
const form1 = document.querySelector('form#textInput')

button.addEventListener('click', changeText)
button2.addEventListener('click', changeText)
//button3.addEventListener('click', changeText)
form1.addEventListener('submit', handleSubmit)