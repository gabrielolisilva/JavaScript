listaFilmes = {
    filme1: 'Avenger',
    filme2: 'Shark',
    filme3: 32,
    filme4: 5
}

function exibirPropriedades (lista){
    for (prop in lista){
        if(typeof lista[prop] === 'string'){
            console.log(prop, lista[prop])
        }
    }
}

exibirPropriedades(listaFilmes)