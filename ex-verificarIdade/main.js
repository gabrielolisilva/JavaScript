function verificador(){
    var textoAlterado = document.querySelector('#fraseFinal')

    var agora = new Date()
    var anoAtual = agora.getFullYear()

    var dado = document.querySelector('#data')
    var valorDigitado = Number(dado.value)
    var idade = anoAtual - valorDigitado

    var fsex = document.getElementsByName('sexo')
    var genero= ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(valorDigitado < 1920 || valorDigitado > anoAtual){
        window.alert('Insira uma data válida!')
    } else{
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/crianca-m.jpg')
        } else if(idade >=10 && idade < 21){
            //adolescente
            img.setAttribute('src', 'imagens/adolescente-m.jpg')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/adulto-m.jpg')
        } else{
            //idoso
            img.setAttribute('src', 'imagens/idoso-m.jpg')
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/crianca-f.jpg')
        } else if(idade >=10 && idade < 21){
            //adolescente
            img.setAttribute('src', 'imagens/adolescente-f.jpg')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/adulto-f.jpg')
        } else{
            //idoso
            img.setAttribute('src', 'imagens/idoso-f.jpg')
        }
    }
    textoAlterado.style.textAlign= 'center'
    textoAlterado.innerHTML= `Detectamos 
    um ${genero} de ${idade} Anos`
    textoAlterado.appendChild(img)
    }
}