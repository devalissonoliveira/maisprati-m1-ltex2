// Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
// Dica: Um número primo só é divisível por 1 e por ele mesmo.

const prompt = require('prompt-sync')();

let prime = Number(prompt('Qual número que deseja verificar? '))

for(let i = 1; i < prime; i++){
    if((prime % i === 0) && (i !== 1)){
        console.log('Não é primo!');
        break
    }

    if(i === (prime - 1)){
        console.log('É primo!');        
    }
}