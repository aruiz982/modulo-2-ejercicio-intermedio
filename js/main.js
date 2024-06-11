'use strict';

// Variables del HTML

const input = document.querySelector('.js__input');
const btn = document.querySelector('.js__btn');
const clueText = document.querySelector('.js__clueText');
const trialsText = document.querySelector('.js__trialsText');

// Variables para almacenar el randomNumber y el counter

let randomNumber = getRandomNumber(100);
console.log(randomNumber);
let counter = 1;

// Función para crear el número aleatorio

function getRandomNumber(max) {
    return parseInt(Math.random() * max);
}

// Función para adivinar el número aleatorio

function guessNumber (ev) {    
    const inputValue = parseInt(input.value);
    
    if(inputValue < 1 || inputValue > 100){
        clueText.innerHTML = 'El número debe de estar entre 1 y 100';
    } else if(inputValue < randomNumber){
        clueText.innerHTML = 'Demasiado bajo';
    } else if (inputValue > randomNumber){
        clueText.innerHTML = 'Demasiado alto';
    } else if (inputValue === randomNumber){
        clueText.innerHTML = '¡¡¡Has ganado, campeona!!!';
    } else {
        clueText.innerHTML = 'Por favor, introduce un número';
    }
}

//Función para actualizar el contador

function updateCounter (ev) {
    let updatedCounter = counter ++;
    trialsText.innerHTML = `Número de intentos: ${updatedCounter}`;
}

// Función que ejecuta guessNumber y updateCounter

function handleClick(ev){
    ev.preventDefault();

    guessNumber();
    updateCounter();
}

btn.addEventListener('click', handleClick); //Llamada a la función handleClick cuando se hace click en btn

