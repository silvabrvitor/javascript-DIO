let count = 0

function increment() {
  if (count >= 10) {
    BTN_RIGHT.disabled = true
    BTN_LEFT.disabled = false
  } else {
    count++
    CURRENT_NUMBER.innerHTML = count
    BTN_LEFT.disabled = false
  }
}

function decrement() {
  if (count <= 0) {
    BTN_RIGHT.disabled = false
    BTN_LEFT.disabled = true
  } else {
    count--
    CURRENT_NUMBER.innerHTML = count
    BTN_RIGHT.disabled = false
  }
}

const CURRENT_NUMBER = document.getElementById('currentNumber')

const BTN_RIGHT = document.getElementById('adicionar')
const BTN_LEFT = document.getElementById('subtrair')

BTN_RIGHT.addEventListener('click', increment)

BTN_LEFT.addEventListener('click', decrement)
