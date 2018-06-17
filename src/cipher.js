//  se usa para escribir codigo con buenas practicas
'use strict';

// objeto window cipher
window.cipher = {
  // Declarando función dentro de un objeto, (parámetro) ES6
  encode(str, offset) {
    // separa la cadena de caracteres que el usuario meta en un arreglo y convierte la letra en su valor ascii
    return str.split('').map(letter => letter.charCodeAt(0))
      //  parametro ascci = ascci + offset
      .map(ascii => ascii + offset)
      // a cada elemento si es mayor que 126 entonces le restas 95, si no deja el mismo valor.
      // operador ternario dentro de un arrow function
      .map(asciiOffset => asciiOffset > 126 ? asciiOffset - 95 : asciiOffset)
      // al parametro asciiLetter que es un arreglo convierte cada uno de sus elementos en caracteres
      .map(asciiLetter => String.fromCharCode(asciiLetter))
      // une cada caracter por 'nada'
      .join('');
  },

  // declarando función dentro de un objeto, (parámetro) ES6
  decode(str, offset) {
    // separa la cadena de caracteres que el usuario meta en un arreglo y convierte la letra en su valor ascii
    return str.split('').map(letter => letter.charCodeAt(0))
      //  parametro ascci = ascci + offset
      .map(ascii => ascii - offset)
      // a cada elemento si es mayor que 126 entonces le restas 95, si no deja el mismo valor.
      // operador ternario dentro de un arrow function
      .map(asciiOffset => asciiOffset < 32 ? asciiOffset + 95 : asciiOffset)
      // al parametro asciiLetter que es un arreglo convierte cada uno de sus elementos en caracteres
      .map(asciiLetter => String.fromCharCode(asciiLetter))
      // une cada caracter por 'nada'
      .join('');
  }
}
// al objeto cipher le agrego una llave createCipherWithOffset cuyo valor es una funcion que recibe un parametro offset
// y retorna un objeto con 2 llaves donde cada una es la funcion encode y decode
window.cipher.createCipherWithOffset = offset => {
  return {
    encode: window.cipher.encode,
    decode: window.cipher.decode
  }
}
