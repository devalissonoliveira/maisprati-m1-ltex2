// Conte o número de dígitos de um número
// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
// Dica: Use operações de divisão para reduzir o número até que ele seja zero.

const prompt = require('prompt-sync')();

let numero = Number(parseInt(prompt('Digite um valor: ')))

let contador = 0;
let resto;

do {
    resto = numero % 10;
    numero = (numero - resto) / 10;
    contador++;
} while (numero > 0);


console.log(`Número de dígitos do número fornecido: ${contador}`);