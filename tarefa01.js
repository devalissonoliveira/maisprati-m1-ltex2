// Imprima a sequência de Fibonacci até o 10º termo
// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

let valor1 = 0; 
let valor2 = 1;

console.log(valor1);
console.log(valor2);

for (let i = 0; i < 8; i++) {
    let proxValor = valor1 + valor2;
    console.log(proxValor);
    
    valor1 = valor2;
    valor2 = proxValor;
}