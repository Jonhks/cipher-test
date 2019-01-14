let inputCifrar = document.getElementById('input-cifrar')
let inputDescifrar = document.getElementById('input-descifrar')
let inputOffset = document.getElementById('input-offset')
let buttonCifrar = document.getElementById('button-cifrar')
let buttonDesCifrar = document.getElementById('button-descifrar')


const printCode = (str) =>{
  const output = document.getElementById('output')
  output.classList.remove('ocultar')
  output.value = str
}

buttonCifrar.addEventListener('click', () => {
  let str = inputCifrar.value
  let offset = inputOffset.value
  const encode = window.cipher.encode(offset, str)
  printCode(encode)
  inputCifrar.value = ''
})

buttonDesCifrar.addEventListener('click', () => {
    let str = inputDescifrar.value
    let offset = inputOffset.value
    const decode = window.cipher.decode(offset, str)
    printCode(decode)
    inputDescifrar.value = ''
})

 