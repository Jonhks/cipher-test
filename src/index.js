const buttonCifrar = document.getElementById('button-cifrar');
const inputOffset = document.getElementById('input-offset');
const inputCifrar = document.getElementById('input-cifrar');
const inputDescifrar = document.getElementById('input-descifrar');
const buttonDescifrar = document.getElementById('button-descifrar');
const buttonCambiar = document.getElementById('button-cambiar');
const output = document.getElementById('output');





const encodeFunction = () =>{
    let str = inputCifrar.value;
    let offset = inputOffset.value;
    offset = parseInt(offset);
    const textCipher = window.cipher.encode(offset, str);
    printFunction(textCipher);

}

const decodeFuntion = () => {
    let str = inputDescifrar.value;
    let offset = inputOffset.value;
    offset = parseInt(offset)
    const textDescipher = window.cipher.decode(offset, str);
    printFunction(textDescipher);
}

const printFunction = (text) => {
    output.classList.remove('ocultar');
    output.value = text
}

const changeInputs = () => {
    let checkCifrar = inputCifrar.value;
    let checkDescifrar = inputDescifrar.value;
    console.log(output.value)
    if(checkCifrar.length <= 0){
        inputCifrar.value = output.value;
        inputDescifrar.value= '';
        output.value= '';
    } else if(checkDescifrar.length <= 0){
        inputDescifrar.value = output.value;
        inputCifrar.value= '';
        output.value= '';
    }
    // alert('esta vacio')
}

buttonCifrar.addEventListener('click', encodeFunction)
buttonDescifrar.addEventListener('click', decodeFuntion)
buttonCambiar.addEventListener('click', changeInputs)

