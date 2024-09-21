// Imprima um triângulo de números
// Escreva um programa que use um loop for para imprimir um triângulo de números.
// Dica: Utilize dois loops for, um dentro do outro.

for (let i = 0; i < 5; i++) {
    let linha = '';
    for (let n = 1; n <= i + 1; n++) {
      linha += `${n} `;
    }
    console.log(linha);
}