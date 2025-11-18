const form = document.querySelectorAll("form")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTelefone = document.getElementById("telefone")

form.addEventLister("submit", function(event) 
    event.preventDefault()
   
    // Validação do formulário
    /*
*/

if (inputNome.value == "") {
alert("Digite o nome")
return false
})






    console.log("Nome", inputNome.value)
    console.log("Email", inputEmail.value)
    console.log("Telefone", inputTelefone.value)

   

    
        
    