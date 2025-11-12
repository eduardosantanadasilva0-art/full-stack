/*
Enunciado:
Crie um programa que peça a idade de uma pessoa e mostre 
uma masagem dizendo se ela pode votar ou ainda não pode votar
*/

let idade = Number(prompt("Digite sua idade"));

if (idade < 16) {
    alert("Você pode não votar.");
}else if (idade >= 16 && idade < 18) {
    alert("Voto opcional.");
} else {
    alert("Voto obrigatório");
}


