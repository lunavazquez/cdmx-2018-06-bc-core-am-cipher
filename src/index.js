'use strict';

// siempre inicia en codificar
var state = 'ENCODE';

// asociacion del los tags DOM para javascript
// <p> para cipher-switch
let switchContainer = document.getElementById('switch-container');
let switchEncode = document.getElementById('encode');
let switchDecode = document.getElementById('decode');

// inputs para cipher-message-container
let inputMessage = document.getElementById('input');
let outputMessage = document.getElementById('output');
let offsetMessage = document.getElementById('offset');

// cipher-btn-container
let btn = document.getElementById('action');

// Cuando el usuario hace click
switchEncode.addEventListener('click', () => {
  // cambia la variable global
  state = 'ENCODE';
  // cambia la clase que es la barra de desplazamiento
  switchContainer.className = 'cipher-switch encode';
  // cambia el nombre del boton
  btn.innerHTML = 'Cifrar';
});

switchDecode.addEventListener('click', () => {
  // cambia la variable global
  state = 'DECODE'
  // cambia la clase que es la barra de desplazamiento
  switchContainer.className = 'cipher-switch decode';
  // cambia el nombre del boton
  btn.innerHTML = 'Descifrar';
});

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

