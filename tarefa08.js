// Calcule a soma dos dígitos de um número       
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

const prompt = require('prompt-sync')();

let numero = Number(parseInt(prompt('Digite um valor para calcular a soma dos dígitos: ')))
let soma = 0;
let resto;
    
do {
    resto = numero % 10;
    numero = (numero - resto) / 10;
    soma += resto;        
} while (numero > 0);

console.log(soma);    