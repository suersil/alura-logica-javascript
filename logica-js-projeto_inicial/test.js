console.log('Imprimindo console 2');
// setTimeout(() => {
//     console.log('Imprimindo console 2 depois de 1 segundo');
// }, 1000);

// alert('Boas vindas ao site');
// let nome1 = 'Lua';
// let idade1 = 25;
// let numeroDeVendas = 50; 
// let saldoDisponivel = 1000;

// alert('Erro, preencha todos os campos');
// let mensagemDeErro = 'Erro! Preencha todos os campos';
// alert(mensagemDeErro);

// let nome = prompt ('Qual o seu nome?');
// alert('Olá, ' + nome + ' Bem Vindo!')

// let idade = prompt ('Qual a sua idade?');
// idade = parseInt(idade);
// if (idade >= 18){
//     alert('Pode tirar a habilitação!');
// } else {
//     alert('Voce ainda não pode tirar a habilitação!')
// }

// let diaDaSemana = prompt ('Qual o dia da semana?');
// if(diaDaSemana == 'sabado' && 'domingo'){
//     alert('Bom final de semana!');
// }

// let saldoDaConta = 100;
// alert(`O saldo da sua conta é ${saldoDaConta}`);

// Crie um programa de contagem progressiva. 
// Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numero = 0;
let numeroEscolhido = prompt('Escolha um número');
numeroEscolhido = parseInt (numeroEscolhido);

while (numero <= numeroEscolhido){
    alert(numero);
        numero ++;
}
