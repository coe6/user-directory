//console.log('It works!')

function changeText(ev) {
    if(ev.target.textContent === 'Change Header!') {
        const paragraph = document.querySelector('.header1')
        paragraph.textContent = "USER DIRECTORY"
    } else if(ev.target.textContent === 'Change Second Header!') {
        const paragraph = document.querySelector('.header2')
        paragraph.textContent = "SECOND HEADER"
    } else if(ev.target.textContent === 'Change Third Header!') {
        const paragraph = document.querySelector('.header3')
        paragraph.textContent = document.getElementById("changeThirdHeader").value
        document.getElementById("changeThirdHeader").value = ' '
    }
}

const button = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

button.addEventListener('click', changeText)
button2.addEventListener('click', changeText)
button3.addEventListener('click', changeText)