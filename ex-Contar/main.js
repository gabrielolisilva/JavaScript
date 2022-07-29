function contando(){
    var dadoInicio = document.querySelector('#inicio')
    var valorInicio = Number(dadoInicio.value)
    var dadoFim = document.querySelector('#fim')
    var valorFim = Number(dadoFim.value)
    var dadoPasso = document.querySelector('#passo')
    var valorPasso = Number(dadoPasso.value)

    var textoMudou = document.querySelector('#textoAlterado')


    for (valorInicio; valorInicio <= valorFim; valorInicio++){
        textoMudou.innerHTML= `${valorInicio}`
    }
}