function contando(){
    var dadoInicio = document.querySelector('#inicio')
    var valorInicio = Number(dadoInicio.value)
    var dadoFim = document.querySelector('#fim')
    var valorFim = Number(dadoFim.value)
    var dadoPasso = document.querySelector('#passo')
    var valorPasso = Number(dadoPasso.value)

    var textoMudou = document.querySelector('#textoAlterado')


    if(dadoInicio.value.length == 0 || dadoFim.value.length == 0 || dadoPasso.value.length == 0){
        window.alert('Dados Faltando, completo todos os campos!')
    } else{
        textoMudou.innerHTML= 'Contando... <br>'

        if(valorPasso <= 0){
            window.alert('Passo inválido, considerando passo 1')
            valorPasso = 1
        }
        if (valorInicio < valorFim){
            for(let c = valorInicio; c <= valorFim; c += valorPasso){
                textoMudou.innerHTML += `${c} \u{1F449}` //esse código de emoji só funciona entre crases
            }
            textoMudou.innerHTML += `\u{1F3C1}`
        } else {
            for(let c = valorInicio; c >= valorFim; c -= valorPasso){
                textoMudou.innerHTML += `${c} \u{1F449}`
            }
            textoMudou.innerHTML += `\u{1F3C1}`
        }      
    }
}