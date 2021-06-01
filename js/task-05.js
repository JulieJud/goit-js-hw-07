const iputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

iputNameEl.addEventListener('input',onInputChange)
function onInputChange(event) {
    console.log(event.currentTarget.value);
    event.currentTarget.value !== '' ?
        (outputNameEl.textContent = event.currentTarget.value) :
        (outputNameEl.textContent='незнакомец') 
    
}