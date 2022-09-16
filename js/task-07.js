"use strict";

const inputChange = document.querySelector('input#font-size-control')
const inputText = document.querySelector('span#text')

inputChange.addEventListener('change', event => {
    inputText.style.fontSize = `${event.target.value }px`
})