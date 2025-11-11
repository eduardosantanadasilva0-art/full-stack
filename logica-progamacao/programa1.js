/*
    Vamos criar um programa, que o suarário executa uma função
    e dentro dessa função existe uma frase.
    pode pular linhas.
*/

function executarFrases(frase) {
    document.write (frase);
}

function pularLinha() {
    document.write("<br>")
}

// Para executar a função
executarFrases("JavaScript com lógica");
pularLinha();
executarFrases("Eu sou foda");
