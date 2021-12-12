let count = 0

function increment() {
  count++
  CURRENT_NUMBER.innerHTML = count
  if (count >= 0) {
    CURRENT_NUMBER.style.color = '#000000'
  }
}

function decrement() {
  count--
  CURRENT_NUMBER.innerHTML = count

  if (count < 0) {
    CURRENT_NUMBER.style.color = '#FFFF00'
  }
}

const CURRENT_NUMBER = document.getElementById('currentNumber')

const BTN_RIGHT = document.getElementById('adicionar')
const BTN_LEFT = document.getElementById('subtrair')

BTN_RIGHT.addEventListener('click', increment)

BTN_LEFT.addEventListener('click', decrement)
