// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener("click", cloneField)


//Executar uma acao
function cloneField() {
    //duplicar os campos 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo limpar
    fields.forEach((field) => {
        // get the current field and clean
        field.value = "";
    })

    // colocar na pag.
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
