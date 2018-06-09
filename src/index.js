'use strict';

// asociacion del los tags DOM para javascript
// inputs para codificar el mensaje
let inputDecodeMessage = document.getElementById('input-decoded-message');
let outputCodedMessage = document.getElementById('output-coded-message');
let encodeBtn = document.getElementById('encode-btn');

// inputs para decodificar el mensaje
let inputCodedMessage = document.getElementById('input-coded-message');
let outputDecodeMessage = document.getElementById('output-decoded-message');
let decodeBtn = document.getElementById('decode-btn');

// Agregar evento click al botón
// función declarada en (arrow functio =>)
encodeBtn.addEventListener('click', (event) => {
  //a la variable value mandarle el valor de input
  let value = inputDecodeMessage.value;
  // el valor del outputMessage va a ser igual al valor que retorne la función encode del objeto window.cipher
  outputCodedMessage.value = window.cipher.encode(value);
});

// agregar un evento click al botón
// función declarada en es6
decodeBtn.addEventListener('click', (event) => {
  //a la variable value mandarle el valor de input
  let value = inputCodedMessage.value;
  // el valor del output va a ser igual al valor que retorne la función decode del objeto window.cipher
  outputDecodeMessage.value = window.cipher.decode(value);
});
