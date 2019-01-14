window.cipher = {
  encode: (offset, string) => {
    let wordAscii = '' ;
    offset = parseInt(offset);
    if(isNaN(offset)){
      alert('El campo "Offset" funciona al ingresa números mayores a 0. \n Intenta nuevamente. 🤦🏻‍')
      return wordAscii;
    }
    for(let i = 0 ; i < string.length; i++) {
      let ascciCode = string.charCodeAt(i);
      if(ascciCode >= 65 && ascciCode <= 90){
        let ascciCifrado = (ascciCode - 65 + offset) % 26 + 65;
        wordAscii += String.fromCharCode(ascciCifrado); 
      } else if (ascciCode >=97 && ascciCode <= 122){
				let ascciCifrado = (ascciCode - 97 + offset) % 26 + 97
        wordAscii += String.fromCharCode(ascciCifrado); 
      } else if (ascciCode === 32  || ascciCode >= 91 || (ascciCode >=33 || ascciCode<=64)){ 
        wordAscii += String.fromCharCode(ascciCode); 
      }
    }
   return wordAscii
  },
  decode: (offset, string) => {
    let ascciWord = '';
    offset = parseInt(offset);
    if(isNaN(offset)){
      alert('El campo "Offset" funciona al ingresa números mayores a 0. \n Intenta nuevamente. 🤦🏻‍')
      return ascciWord; 
    }
    for(let i = 0; i <= string.length; i++){
      let ascciCode = string.charCodeAt(i);
      if(ascciCode >= 65 && ascciCode <= 90){
        let ascciCifrado = (ascciCode + 65 - offset) % 26 +65;
        ascciWord += String.fromCharCode(ascciCifrado)
      } else if (ascciCode >= 97 && ascciCode <= 122) {
        let ascciCifrado = (ascciCode - 97 - offset) % 26 + 97;
        ascciWord += String.fromCharCode(ascciCifrado); 
      } else if (ascciCode === 32  || ascciCode === 95 || (ascciCode>=33 || ascciCode<=64)){
        ascciWord += String.fromCharCode(ascciCode); 
      }
    }
    return  ascciWord;
  }
};
