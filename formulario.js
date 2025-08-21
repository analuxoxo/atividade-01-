let readline = require('readline-sync')

console.log("---------Formulário de (Peter)----------")

///////////////////////////////////////////////////////

let nome = readline.question("Qual é o seu nome?")
  console.log("Ola",nome)

let dataNascimento = readline.question("Digite sua data de nascimento em (formato AAAA-MM-DD):")
 console.log("nasci em: ",dataNascimento)

let telefone = readline.question("Digite seu número de telefone")
 console.log("meu número é: ",telefone)

let temAnimal = readline.question("Você tem animal em casa? (sim/não)") 

 let quantidadeAnimais = 4;
  if(temAnimal == "sim") {  

quantidadeAnimais = (readline.question("Quantos animais você tem?"))
 console.log("Quantidade de animais: ",quantidadeAnimais)

 }

let idadepenal = 2025 - dataNascimento
  if(idadepenal >= 18){

 console.log("maior de idade aff")

  }else{

 console.log(" menor de idade uhuu")

 }

 ///////////////DADOS FINAIS///////////////

console.log("\n===== RESUMO DO FORMULÁRIO =====")

console.log("Nome: " + nome)

console.log("Data de nascimento: " + dataNascimento)

console.log("Telefone: " + telefone)

console.log("tem animal em casa?" (temAnimal== "sim" ? "Sim" : "Não"))

if (temAnimal == "sim") {
    console.log("Quantidade de animais: " + quantidadeAnimais);

  }
console.log("É maior de idade? " + (idadepenal ? "Sim" : "Não"))




