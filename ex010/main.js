multiplos3 = [];
multiplos5 = [];

let contador3 = 0;
let contador5 = 0;

function somar (limite){
    for(let i = 1; i <= limite; i++){
        if(i % 3 === 0) multiplos3.push(i)
        if(i % 5 === 0) multiplos5.push(i)
    }
    console.log(multiplos3)
    console.log(multiplos5)

    for (let i = 0; i < multiplos3.length; i++){
        contador3 += multiplos3[i]
    }

    for (let i = 0; i < multiplos5.length; i++){
        contador5 += multiplos5[i]
    }

    console.log(contador3 + contador5)
}

somar(20);