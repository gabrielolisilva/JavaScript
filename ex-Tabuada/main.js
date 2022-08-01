function gerarTabuada(){
    let dadoDigitado = document.querySelector('#valor')
    let valorDigitado = Number(dadoDigitado.value)
    let tab = document.querySelector('#itabela')

    if(dadoDigitado.value.length == 0){
        window.alert('Insira um número!')
    } else {
        tab.innerHTML = ''
        for(c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${valorDigitado} X ${c} = ${valorDigitado * c}`
            item.value = `V${c}`
            tab.appendChild(item)
        }
    }
}