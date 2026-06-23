function contador(ini, fim){
    let num=''
    for (ini; ini<fim+1; ini++){
        if (ini==fim){
            num+=`${ini}!`
        } else{
            num+=`${ini} => `
        }
    }
console.log(num)
}
contador(1, 5)
function contadormenos(fim, ini){
    let num=''
    for(fim; fim>ini-1; fim--){
        if (fim==ini){
            num+=`${fim}!`
        } else{
            num+=`${fim} => `
        }
    }
    console.log(num)
}
contadormenos(10, 1)