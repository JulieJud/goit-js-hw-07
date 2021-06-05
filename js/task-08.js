const render = document.querySelector("[data-action='render']")
const destroy = document.querySelector("[data-action='destroy']")
const boxes = document.querySelector("#boxes")
const input = document.querySelector('input')

render.addEventListener('click',createBoxes)
destroy.addEventListener('click',destroyBoxes)

function createBoxes(amount) {
    amount = input.value
    const newDis = [];
    

    
    for (let i = 0; i < amount; i++) {

        const box = document.createElement('div')
        
        let size=30 + i * 10 
      box.style.cssText =`width: ${size}px; height: ${size}px; background-color: rgb( ${random()} , ${random()} , ${random()} )`
      
      
      newDis.push(box) 
    }

    boxes.append(...newDis)
    
}
    
function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}