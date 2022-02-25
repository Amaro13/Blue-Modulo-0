"use strict";
const prompt = require(`prompt-sync`)();

///////// Projeto /////////
// O programa deve fazer 5 perguntas ao usuario com respostas de sim ou não
// Caso o usuario responda sim a 4 perguntas ou mais, devemos retornar que ele é culpado
// Caso o usuario responda sim a 3 perguntas, devemos retornar que ele é suspeito
// Caso o usuario responda sim a 2 perguntas ou menos, devemos retornar que ele é inocente
// Criterios de aceitação:
// Precisa retornar resposta para todas as possibilidades de culpado,suspeito ou inocente.
// Precisa ter condicionais.

let resposta = "";
let contador = 0;

for (let i = 0; i < 5; i++) {
  if (i == 0) {
    resposta = prompt("Você estava na cena do crime quando aconteceu?(S/N)");
  }
  if (i == 1) {
    resposta = prompt("A arma do crime é sua?(S/N)");
  }
  if (i == 2) {
    resposta = prompt("Você tinha motivos para cometer o crime?(S/N)");
  }
  if (i == 3) {
    resposta = prompt("Você tem algum álibi?(S/N)");
  }
  if (i == 4) {
    resposta = prompt("Você foi vista cometendo o crime?(S/N)");
  }
  if (resposta == "S") {
    contador++;
  }
}

if (contador >= 4) {
  console.log("Culpado");
} else if (contador == 3) {
  console.log("Suspeito");
} else {
  console.log("Inocente");
}
