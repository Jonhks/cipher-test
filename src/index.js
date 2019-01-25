let inputCifrar = document.getElementById('input-cifrar')
let inputDescifrar = document.getElementById('input-descifrar')
let inputOffset = document.getElementById('input-offset')
const buttonCifrar = document.getElementById('button-cifrar')
const buttonDescifrar = document.getElementById('button-descifrar')
const hiddenBox = document.getElementById('output')
const changeButton = document.getElementById('button-cambiar')



buttonCifrar.addEventListener('click', () => {
  hiddenBox.classList.remove("ocultar")
  let str = inputCifrar.value
  let offset = inputOffset.value
  hiddenBox.value = window.cipher.encode(offset, str)
  // hiddenBox.value = hiddenBox;
})

buttonDescifrar.addEventListener('click', () => {
  hiddenBox.classList.remove("ocultar")
  let str = inputDescifrar.value
  let offset = inputOffset.value
  hiddenBox.value = window.cipher.decode(offset, str)
  // hiddenBox.value = hiddenBox
})


changeButton.addEventListener('click', () =>{
  let input1 = inputCifrar.value
  let input2 = inputDescifrar.value
  if(input1.length <= 0 ){
    inputCifrar.value = hiddenBox.value
    inputDescifrar.value=''
    hiddenBox.value=''
  } else if(input2.length <= 0){
    inputDescifrar.value = hiddenBox.value
    inputCifrar.value=''
    hiddenBox.value=''
  }
})