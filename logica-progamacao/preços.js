/* 
Indicar os preços necessários para
comprar o produto , parcelar o produto
ou deixar o produto
*/

let preço = prompt("Digite a comprado")

if (preço >= 30) {
    alert ("Comprado");
}else if (preço >= 20 && preço < 15 ) {
    alert ("Parcelar")
}else{
    alert ("Deixar")
}
