//  se usa para escribir codigo con buenas practicas
'use strict';
const ALPHABET = 26;
const OFFSET = (33 % ALPHABET);

// objeto window cipher
window.cipher = {
  // Declarando función dentro de un objeto, (parámetro)
  encode: function (str) {
    // define una variable vacia donde se almacenara el mensage codificado
    let encrypt = '';
    for (let i = 0, l = str.length; i < l; i++) {
      // obtengo el valor ascii de la letra y se almacena en asciiCode
      let asciiCode = str[i].charCodeAt(0);
      // sumo el valor ascii mas el offset
      let encodedChar = asciiCode + OFFSET;
      // si se pasa del 90, le resto ALPHABET
      if (encodedChar > 90) {
        encodedChar -= ALPHABET;
        // si es menor a 65 sumar ALPHABET
      } else if (encodedChar < 65) {
        encodedChar += ALPHABET;
      }
      // convierte el codigo ASCII a letra
      encrypt += String.fromCharCode(encodedChar);
    }
    // regresa el valor de la variable
    return encrypt;
  },
  // declarando función dentro de un objeto, (parámetro)
  decode: function (str) {
    // Declarar función vacia donde se almacenara el mensaje decodificado
    let decrypt = '';
    for (let i = 0, l = str.length; i < l; i++) {
      // obten el valor Ascii de la letra y almacenarlo en asciiCode
      let asciiCode = str[i].charCodeAt(0);
      // resta el valor ascii menos offset
      let decodeChar = asciiCode - OFFSET;
      if (decodeChar > 90) {
        decodeChar -= ALPHABET;
      } else if (decodeChar < 65) {
        decodeChar += ALPHABET;
      }
      // convertir el código ascii a letra, decodificar.
      decrypt += String.fromCharCode(decodeChar);
    }
    return decrypt;
  }
}
