const decrementBtn = document.querySelector("[data-action='decrement']")
const incrementBtn = document.querySelector("[data-action='increment']")
const valueEl = document.querySelector('#value')

decrementBtn.addEventListener('click', function () { console.log('klik') })
incrementBtn.addEventListener('click', function () {console.log('klik-inc')})