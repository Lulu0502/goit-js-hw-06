

const inputChange = document.querySelector('input#font-size-control')
const inputText = document.querySelector('span#text')

inputChange.addEventListener('input', event => {
    inputText.style.fontSize = `${event.target.value }px`
})