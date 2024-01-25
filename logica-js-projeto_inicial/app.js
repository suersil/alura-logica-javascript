alert('Bem vindo ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);   // parseInt para gerar um num Int e nao ter casas decimais // +1 para ser maior 0 // *(100) para ser entre 0 e 100

console.log(numeroSecreto);

let chute;
let tentativas = 1; 

//Enquanto o chute não for igual ao ns, keep going
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
//Se o chute for igual ao numero secreto
    if (numeroSecreto == chute){
        break;
        
    } else { //se não
        if (numeroSecreto < chute){
            alert(`O número secreto é menor ${chute}`);
        } else {
            alert(`O número secreto é maior ${chute}`);
        }
        tentativas ++;
    }
}
// alert('Parabéns, voce descobriu o numero secreto ' + numeroSecreto); -> forma antiga de concatenar

// if (tentativas > 1){
//     alert(`Parabens voce descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativas`);
// } else {
//     alert(`Parabens voce descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativa`);
// }    

//Usando "Ternario" ao invés do código acima î
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens voce descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);
