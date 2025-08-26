let readline = require('readline-sync')

console.log('\ --------------FORMULARIO DE JUJU ----------------')

let nome = readline.question('qual seu nome? :')

// pergunta o ano de nascimento // calcula a idade

let dataNascimento = readline.question('Qual sua data de nascimento? (DD/MM/AAAA): ')

let anoNascimento = parseInt(dataNascimento.split('/')[2]);
let anoAtual = 2025
let idade = anoAtual - anoNascimento

// Pergunta se tem animal de estimacao

let temPet= readline.question('Voce tem animal de estimacao? (sim/nao) : ')

let qtdPets = 0;

 if (temPet === 'sim') {
    qtdPets = readline.question('Quantos animais voce tem? ');

console.log('\n=== INFORMAÇÕES DE JUJU ===');
console.log(`Nome: ${nome}`);
console.log(`Data de nascimento: ${dataNascimento}`);
console.log(`Idade: ${idade}`);
console.log(`Tem pet: ${temPet}`);
if (temPet === 'sim') {
    console.log(`Quantidade de pets: ${qtdPets}`);
}

console.log('-----------------------------------------------');

}
