window.addEventListener('load', start)

function start() {
  console.log('Inicializado com sucesso!')
}

// =====Pegando os valores=====
const redInputRange = document.querySelector('#red-input-range')
const redInput = document.querySelector('#red-input')
const greenInputRange = document.querySelector('#green-input-range')
const greenInput = document.querySelector('#green-input')
const blueInputRange = document.querySelector('#blue-input-range')
const blueInput = document.querySelector('#blue-input')

let rgbValues = {
  red: redInputRange,
  green: greenInputRange,
  blue: blueInputRange
}

function changeValueByRange(range, input) {
  range.addEventListener('input', () => input.setAttribute('value', [range.value])
  )
}

changeValueByRange(redInputRange, redInput)
changeValueByRange(greenInputRange, greenInput)
changeValueByRange(blueInputRange, blueInput)

// =====Acrescentando os valores RGB à div COLOR-DISPLAY======
const colorDisplay = document.getElementById('color-display')
const boxShadowDisplay = document.getElementById('content')

function changeColorDom(red, green, blue, element) {
  let colorRgb = `rgb(${red.value},${green.value},${blue.value})`
  return element.id === 'color-display'
    ? element.style.backgroundColor = colorRgb
    : element.style.boxShadow = `25px 25px 40px ${colorRgb}`
}

function setColorIntoColorDisplay(rgbValues, element) {
  document.addEventListener('input', () => changeColorDom(rgbValues.red, rgbValues.green, rgbValues.blue, element))
}
setColorIntoColorDisplay(rgbValues, boxShadowDisplay)
setColorIntoColorDisplay(rgbValues, colorDisplay)



