'use strict';

// siempre inicia en codificar
let state = 'DECODE';

// asociacion del los tags DOM para javascript
// <p> para cipher-switch
let switchEncode = document.getElementById('encode');
let switchDecode = document.getElementById('decode');

// inputs para cipher-message-container
let inputMessage = document.getElementById('input');
let outputMessage = document.getElementById('output');
let offsetMessage = document.getElementById('offset');

// cipher-btn-container
let btn = document.getElementById('action');

// Agregar evento click al botón
// función declarada en (arrow functio =>)
btn.addEventListener('click', (event) => {
  console.log(state);
  let offset = offsetMessage.value % 95;
  // input va a guardar el valor que el usuario meta
  let input = inputMessage.value;
  // output esta vacia por que ahi se guarda el resultado de lo que el usuario haga encriptar o desencriptar
  let output = '';
  // si es igual entonces
  if (state === 'ENCODE') {
    // si el usuario escoge switch encode, ouput va a ser igual a la funcion encode del window
    output = window.cipher.encode(input, offset);
  } else if (state === 'DECODE') {
    // si el usuario escoge switch decode, ouput va a ser igual a la funcion decode del window
    output = window.cipher.decode(input, offset);
  }
  // el valor de output asocialo a la variable output, para las dos condiciones
  outputMessage.value = output;
});

