'use strict';

//Variables

const input = document.querySelector('.js__input');
const btn = document.querySelector('.js__btn');
const clueText = document.querySelector('.js__clueText');
const trialsText = document.querySelector('.js__trialsText');

let randomNumber = 0;
let counter = 1;

function getRandomNumber(max) {
    randomNumber = parseInt(Math.random() * max);
    console.log(randomNumber);
    return randomNumber;
}

window.addEventListener('load', () => getRandomNumber(100));


const guessNumber = (ev) => {
    ev.preventDefault();
    
    const inputValue = parseInt(input.value);
    
    if(inputValue < 1 || inputValue > 100){
        console.log('El número debe de estar entre 1 y 100');
        clueText.innerHTML = 'El número debe de estar entre 1 y 100';
    } else if(inputValue < randomNumber){
        console.log('Demasiado bajo');
        clueText.innerHTML = 'Demasiado bajo';
    } else if (inputValue === randomNumber){
        console.log('¡¡¡Has ganado, campeona!!!');
        clueText.innerHTML = '¡¡¡Has ganado, campeona!!!';
    } else if (inputValue > randomNumber){
        console.log('Demasiado alto');
        clueText.innerHTML = 'Demasiado alto';
    } else {
        console.log('Por favor, introduce un número');
        clueText.innerHTML = 'Por favor, introduce un número';
    }
}

const updateCounter = (ev) => {
    ev.preventDefault();


    let updatedCounter = counter ++;
    trialsText.innerHTML = `Número de intentos: ${updatedCounter}`;
}




btn.addEventListener('click', guessNumber);
btn.addEventListener('click', updateCounter);

