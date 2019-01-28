let inputCifrar = document.getElementById('input-cifrar')
let inputDescifrar = document.getElementById('input-descifrar')
let inputOffset = document.getElementById('input-offset')
const buttonCifrar = document.getElementById('button-cifrar')
const buttonDescifrar = document.getElementById('button-descifrar')
const hiddenBox = document.getElementById('output')
const changeButton = document.getElementById('button-cambiar')


const encodeFunction = () => {
  hiddenBox.classList.remove("ocultar")
  let str = inputCifrar.value
  let offset = inputOffset.value
  const encode = window.cipher.encode(offset, str)
  printText(encode)
}

const decodeFunction = () => {
  hiddenBox.classList.remove("ocultar")
  let str = inputDescifrar.value
  let offset = inputOffset.value
  const decode = window.cipher.decode(offset, str)
  printText(decode)
}

buttonCifrar.addEventListener('click', encodeFunction)
buttonDescifrar.addEventListener('click', decodeFunction)


const printText = (textCode) => {
  hiddenBox.value = textCode
}

changeButton.addEventListener('click', () => {
  let input1 = inputCifrar.value
  let input2 = inputDescifrar.value
  if (input1.length <= 0) {
    inputCifrar.value = hiddenBox.value
    inputDescifrar.value = ''
    hiddenBox.value = ''
  } else if (input2.length <= 0) {
    inputDescifrar.value = hiddenBox.value
    inputCifrar.value = ''
    hiddenBox.value = ''
  }
})
