// Imprima um padrão de estrela decrescente
// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
// Dica: Utilize dois loops, um dentro do outro.

let i = 5;
let j = 1;

do {
    let estrelas = '';
    do {
        estrelas += "*";
        j++;
    } while (j <= i);
    
    console.log(estrelas);
    i--;
    j = 1;
} while (i > 0);