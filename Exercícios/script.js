'use strict'
const prompt = require(`prompt-sync`)();

///// Básico /////
/*
// Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"
console.log("O primeiro programa a gente nunca esquece!");

// Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.
console.log("Nome: Amaro Francisco \n Endereço: Rua viajando \n CEP: 985728349 \n Tel: (31)9863-kissa");

// Faça um programa que mostre na tela uma letra de música que você gosta.
console.log("I hate everything about you \n Why do I, Love you");

// Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
const nome = prompt("Qual o seu nome?");
const options= ['1: Deluxe', '2: Normal', '3: Básico'];
const escolha = prompt(`Qual o seu plano?(${options})`)
console.log(`Seu nome é ${nome}, e seu plano é o ${options[escolha-1]}`)

// Defina uma variável para o valor de uma refeição que custou R$ 42,54;
const meal = 42.54;

// Defina uma variável para o valor da taxa de serviço que é de 10%;
const ts = meal*0.1;

// Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
const vt = meal + ts;
console.log(`R$ ${vt}.`);

// Qual o valor do troco?
const qt = prompt("Quanto vai pagar?");
console.log((qt-vt).toFixed(2));

// Defina uma variável para o valor de uma compra que custou R$100,98;
const vc = 100.98;

// Defina uma variável para o valor que o cliente pagou R$150,00;
const vp = 150.00;

// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.
const vf = vp - vc;
console.log(vf.toFixed(2));

// Defina uma variável para o valor do ano do nascimento;
const nascido=1995;

// Defina uma variável para o valor do ano atual;
const atual = 2022;

// Defina uma variável que calcula o valor final da idade da pessoa;
const idade= parseInt(atual-nascido);

// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
console.log(`Sua idade é de ${idade} e você está na flor da idade.`)
*/

/////// Médio /////
/*
// Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
const numero = prompt(`Diga um número.`);
if (numero%2 == 0){
    console.log(`Seu número é par.`);
  } else {
    console.log(`Seu número é impar.`);
  }

// Crie uma variável para receber o valor, com conversão para inteiro
const valor = parseInt(prompt(`Diga um número.`));
console.log(valor);
// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.
let nbr = parseInt(prompt(`Diga um número.`));

while(nbr==0){
     nbr = parseInt(prompt(`Diga um número.`));
}

if (nbr < 0){
    console.log(`Seu número é negativo.`);
  } else {
    console.log(`Seu número é positivo.`);
  }

// Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" se os números forem iguais.
const n1 = prompt(`Diga o valor de n1.`);
const n2 = prompt(`Diga o valor de n2.`);

if (n1 < n2){
    console.log(n2);
  } else if (n2 < n1) {
    console.log(n1);
  } else {
    console.log(`Números iguais`);
  }

// Crie um programa em Portugol que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
const nota = prompt(`Diga o valor de nota real entre 0.00 e 10.0.`);

// Se a nota for menor que 6.0, deve exibir a nota F.
if (nota < 6.0){
    console.log("F");
}
// Se a nota for de 6.0 até 7.0, deve exibir a nota D.
if (nota >= 6.0 && nota <= 7.0){
    console.log("D");
}
// Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
if (nota > 7.0 && nota <= 8.0){
    console.log("C");
}
// Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
if (nota > 8.0 && nota <= 9.0){
    console.log("B");
}
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.
if (nota > 9.0 && nota <= 10.0){
    console.log("A");
}

// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.
const salario = parseFloat (prompt(`Diga o valor do salário`));

// salários até R$ 280,00 (incluindo) : aumento de 20%
if (salario <= 280){
    console.log(`O seu salário de R$${salario} foi aumentado por 20%  resultando em um aumento de R$${salario*0.2}, \n seu salário atual é de R$${(salario*1.2).toFixed(2)}.`);
}
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
if (salario > 280 && salario <= 700){
    console.log(`O seu salário de R$${salario} foi aumentado por 15%  resultando em um aumento de R$${salario*0.15}, \n seu salário atual é de R$${(salario*1.15).toFixed(2)}.`);
}
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
if (salario > 700 && salario <= 1500){
    console.log(`O seu salário de R$${salario} foi aumentado por 10%  resultando em um aumento de R$${salario*0.1}, \n seu salário atual é de R$${(salario*1.1).toFixed(2)}.`);
}
// salários de R$ 1500,00 em diante : aumento de 5%
if (salario > 1500){
    console.log(`O seu salário de R$${salario} foi aumentado por 5%  resultando em um aumento de R$${salario*0.05}, \n seu salário atual é de R$${(salario*1.05).toFixed(2)}.`);
}
*/



///// Difícil /////

// Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:
const lado = prompt(`Qual o lado?`);
const altura = prompt(`Qual a altura?`);
const area = lado*altura;
console.log(`A área é de ${area.toFixed(2)} metros quadrados.`);

// Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
const nascimento = prompt("Em que ano nasceu?");
const valorlit = 2022 - nascimento;
if(valorlit>=18){
  console.log("Voto obrigatório");
}else if(valorlit<18 && valorlit>=15){
  console.log("Voto opcional.");
}else{
  console.log("Voto negado.");
}



// Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
const numero = Math.floor( Math.random() * 11);
const chute = prompt("Qual numero deseja chutar?(0 a 10)");

if (chute == numero){
  console.log("Correto");
}else{
  console.log(`Falso. O correto é ${numero}`);
}

// Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
let saque = prompt("Quanto deseja sacar?");
let cem =0;
let cinquenta=0;
let dez =0;
let cinco=0;
let um=0;
if (saque>10 && saque<600){
  if (saque>=100){
    cem = Math.floor(saque/100);
    saque = saque - cem*100;
  }
  if (saque>=50){
    cinquenta = Math.floor(saque/50);
    saque = saque - cinquenta*50;
  }
  if (saque>=10){
    dez = Math.floor(saque/10);
    saque = saque - dez*10;
  }
  if (saque>=5){
    cinco = Math.floor(saque/5);
    saque = saque - cinco*5;
  }
  if (saque>=1){
    um = saque;
  }
}
console.log(`Seu saque total é de ${cem} notas de cem, ${cinquenta} notas de cinquenta, \n ${dez} notas de dez, ${cinco} notas de cinco e ${um} notas de um.`)

// Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura);
// Decidir de forma aleatória a decisão do computador;
// Mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.const options = ["0: Pedra", "1: Papel", "2: Tesoura"]
let rodadas = prompt("Quantas rodadas?")
let vitorias = 0;
let derrotas = 0;
let jaken = 0;
let joken = 0;
let jogar = "";
let i = 1;

while(i<=rodadas){
  joken = Math.floor(Math.random() * 3)
  jaken = prompt(`Qual vai tentar? \n ${options} \n`)
  if ((jaken == 0 && joken == 2) || (jaken == 1 && joken == 0) || (jaken == 2 && joken == 1)){
    vitorias++;
    console.log(`Ganhou com ${options[jaken]} e o computador com ${options[joken]}`);
  }else if ((jaken == 0 && joken == 1) || (jaken == 1 && joken == 2) || (jaken == 2 && joken == 0)){
    derrotas++;
    console.log(`Perdeu com ${options[jaken]} e o computador com ${options[joken]}`);
  }else{
    console.log(`Empate com ${options[jaken]} e o computador com ${options[joken]}`);
  }
  i++
  if (i>rodadas){
    if(vitorias>derrotas){
      console.log(`Parabéns, você venceu com ${vitorias} vitórias e ${derrotas} derrotas.`)
    }else{
      console.log(`Que pena, você perdeu com ${vitorias} vitórias e ${derrotas} derrotas.`)
    }
    jogar = prompt("Deseja jogar novamente?(S/N)");
    if (jogar=="S"){
      i=1;
      rodadas = prompt("Quantas rodadas?")
      vitorias=0;
      derrotas=0;
    }
  }
}

// Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
// O programa tem que:
// Perguntar quantas rodadas você quer fazer;
// Perguntar quantos jogadores vão jogar;
// Criar um objeto pra cada jogador com nome e número tirado;
// Guarda todos os objetos em uma lista;
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.

let roda = prompt("Quantas rodadas?");
let qtd = prompt("Quantos jogadores?");
let lista = new Array(qtd);
let controle =0;
for (let i = 0; i < qtd; i++) {
  lista[i]  = {Nome:"", guess:0,vencedor:0};
  lista[i].Nome = prompt(`Qual o nome do jogador ${i+1}?`)
}

for (let j = 0; j < roda; j++) {
  for (let i = 0; i < qtd; i++) {
    lista[i].guess = Math.floor(Math.random() * (7 - 1)) + 1
    if (i>0 && lista[i].guess>lista[i-1].guess){
      controle=i;
    }
    if (i==qtd-1){
      lista[controle].vencedor++;
    }
  }
  console.log(lista)
}

function compare( a, b ) {
  if ( a.vencedor < b.vencedor ){
    return 1;
  }
  if ( a.vencedor > b.vencedor ){
    return -1;
  }
  return 0;
}

lista.sort( compare );
console.log(lista);
