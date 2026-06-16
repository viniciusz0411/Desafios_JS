function boletim(nota, nome){
    nota=Number(nome)
    if (nota<5){
        console.log(`${nome} não está aprovado!`)
    } else if(nota<7){
        console.log(`${nome} está em recuperação!`)
    } else{
        console.log(`${nome} aprovado!`)
    }
}
let res = boletim(8, 'Vini'); 