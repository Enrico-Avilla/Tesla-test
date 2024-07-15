//Variáveis
//Uma forma de IDENTIFICAR quem é q quem
//Da um nome pra um pedacinho de código
//É como se vc criasse uma pasta, para guardar informações 

//FUNÇÕES 
//É um trecho de código que só executa, quando é chamado 
//function 
//console.log()
//document = ir no HTML
//querySelector = busca o que eu quiser que ele 

let formulario = document.querySelector(".formulario")

function aparecerFormulario(){
    formulario.style.left = "50%"
}

function desaparecerFormulario(){
    formulario.style.left = "-50%"
}