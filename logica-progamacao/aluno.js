/*
Crie um programa que peça a nota de um aluno 
(de 0 a 10) e mostre:
*/

let nota = Number(prompt("Digite a nota do aluno (0 a 10)"));

if (nota >= 6) {
    alert ("Aprovado");
}else if (nota >=4 && nota < 6) {
    alert("Recuperação");
}else {
    alert("Reprovado");
}