// Inverta os dígitos de um número
// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
// Dica: Use operações de módulo e divisão para extrair os dígitos.

const prompt = require('prompt-sync')();

let numeroDigitado = Number(parseInt(prompt('Digite o número que você quer inverter: ')));
let numeroInvertido = 0;

while (numeroDigitado > 0) {
    let ultimoDigito = numeroDigitado % 10;
    
    numeroInvertido = numeroInvertido * 10 + ultimoDigito;
    
    numeroDigitado = Math.floor(numeroDigitado / 10);
}

console.log(`Número Invertido: ${numeroInvertido}`);