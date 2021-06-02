const fontSizeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeInput.addEventListener('input', InputRange)
function InputRange(event) {
    console.log(event.currentTarget.value )
    text.style.fontSize = event.currentTarget.value+'px'
    
}