// Calcule o fatorial de um número
// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

const prompt = require('prompt-sync')();

let num = Number(parseInt(prompt('Digite um número inteiro positivo: ')));

let fatorial = num;

if(isNaN(fatorial) || !(num >= 0)){

    console.log('Valor digitado é inválido.');   
    
} else {
    if (num === 0){
        fatorial = 1;
    }
    
    while(num > 1){
        fatorial *= (num - 1)
        num--
    } 

    console.log(fatorial);
}