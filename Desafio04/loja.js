const prod=[
    {nome:'Notbook', valor:2400},
    {nome:'Ram', valor:300},
    {nome:'SD', valor:80}
]
for(let c of prod){
    if (c.valor>100){
        console.log(`Um produto acima de 100 reais é ${c.nome}, custando ${c.valor}.`)
    }
}