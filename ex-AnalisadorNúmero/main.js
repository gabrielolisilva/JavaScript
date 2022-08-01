let num = document.querySelector('#numero')
let tab = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNumero (n){
    if (num.value >= 1 && num.value <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionarLista(){
    //exclamação significar falar "nãoinLista"
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}   


function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores é igual a ${media}</p>`
    }
}