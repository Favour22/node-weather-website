console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


// messageOne.textContent = 'From JavaScript'


weatherForm.addEventListener('submit', () => {
    e.preventDefault()

    const location = search.value

        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''


    fetch('http://localhost:3000/weather?address=' + location).then((respond) => {
    respond.json().then((data) => {
        if (data.error) {
            messageOne.rexrContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})