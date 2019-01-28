window.cipher = {
  encode: (offset, str) => {
    let newWord = '';
    for (let i = 0; i < str.length; i++) {
      let asciiLetter = str[i].charCodeAt();
      if (asciiLetter >= 65 && asciiLetter <= 90) {
        let asciiForm = (asciiLetter - 65 + offset) % 26 + 65;
        newWord += String.fromCharCode(asciiForm)
      } else if (asciiLetter >= 97 && asciiLetter <= 122) {
        let asciiForm = (asciiLetter - 97 + offset) % 26 + 97;
        newWord += String.fromCharCode(asciiForm)
      } else {
        newWord += String.fromCharCode(asciiLetter)
      }
    }
    return newWord;
  },
  decode: (offset, str) => {
    let newWord = '';
    for (let i = 0; i < str.length; i++) {
      let asciiLetter = str[i].charCodeAt();
      if (asciiLetter >= 65 && asciiLetter <= 90) {
        let asciiForm = (asciiLetter + 65 - offset) % 26 + 65;
        newWord += String.fromCharCode(asciiForm)
      } else if (asciiLetter >= 97 && asciiLetter <= 122) {
        let asciiForm = (asciiLetter - 122 - offset) % 26 + 122;
        newWord += String.fromCharCode(asciiForm)
      } else {
        newWord += String.fromCharCode(asciiLetter)
      }
    }
    return newWord;
  }
};
