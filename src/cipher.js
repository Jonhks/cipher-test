window.cipher = {
  encode: (offset, string) => {
    let newWord = '';
    offset = parseInt(offset);
    for (let i = 0; i < string.length; i++) {
      let asciiletter = string.charCodeAt(i);
      if (asciiletter >= 65 && asciiletter <= 90) {
        let ascciCifrado = (asciiletter - 65 + offset) % 26 + 65;
        newWord += String.fromCharCode(ascciCifrado);
      } else if (asciiletter >= 97 && asciiletter <= 122) {
        let ascciCifrado = (asciiletter - 97 + offset) % 26 + 97
        newWord += String.fromCharCode(ascciCifrado);
      } else{
        newWord += String.fromCharCode(asciiletter);
      }
    }
   return newWord
  },
  decode: (offset, string) => {
      let newWord = '';
      offset = parseInt(offset);
      for (let i = 0; i < string.length; i++) {
        let asciiletter = string.charCodeAt(i);
        if (asciiletter >= 65 && asciiletter <= 90) {
          let ascciCifrado = (asciiletter + 65 - offset) % 26 +65;
          newWord += String.fromCharCode(ascciCifrado);
        } else if (asciiletter >= 97 && asciiletter <= 122) {
          let ascciCifrado = (asciiletter - 122 - offset) % 26 + 122;
          newWord += String.fromCharCode(ascciCifrado);
        } else{
          newWord += String.fromCharCode(asciiletter);
        }
      }
     return newWord
  }
};
