let morse = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
}
function morsecode(text) {
  text = text.toUpperCase()
  let result = ''
  for (let i = 0; i < text.length; i++) {
    if (morse[text[i]]) {
      result += morse[text[i]] + ' '
    }
  }
  return result
}
function decmorsecode(morsecode) {
  let result = ''
  let text = morsecode.split(' ')
  for (let i = 0; i < text.length; i++) {
    for (let key in morse) {
      if (morse[key] === text[i]) {
        result += key
      }
    }
  }
  return result
}

console.log(morsecode('123'.toLocaleUpperCase()))
