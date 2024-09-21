// Verifique se um número é palíndromo
// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.

const prompt = require('prompt-sync')();

let numeroDigitado = Number(parseInt(prompt('Digite o número que você quer verificar: ')));
let numeroDigitadoInicialmente = numeroDigitado;
let numeroInvertido = 0;

while (numeroDigitado > 0) {
    let ultimoDigito = numeroDigitado % 10;
    
    numeroInvertido = numeroInvertido * 10 + ultimoDigito;
    
    numeroDigitado = Math.floor(numeroDigitado / 10);
}

numeroDigitadoInicialmente === numeroInvertido ? 
    console.log(`O número ${numeroDigitadoInicialmente} é um PALÍNDROMO.`) :
    console.log(`O número ${numeroDigitadoInicialmente} NÃO é um PALÍNDROMO.`);