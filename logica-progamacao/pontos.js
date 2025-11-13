/*
  Se
*/


const vitórias = (prompt("Quantos jogos seu time venceu?"));
const empates = Number(prompt("Quantos jogo seu time empatou"));

const pontos = (vitórias * 3 + empates);

function mostra (mensagem){
document.write(mensagem + pontos);
}
if (pontos > 10){
    mostra("Seu time está indo bem: ");
}else if (pontos < 5) {
    mostra ("Seu time precisa melhorar:");
}else{
    mostra("Fora do rebaixamento")
}
//mostra ()

