// Desafio 01 - Cadastro de pessoas.

/* 
    Crie um objeto chamado pessoa contendo:
    -nome
    -idade
    -cidade

    Após a criação:
    -altere a idade
    -adicione uma profissão
    -remova a cidade

    No fim exiba o objeto final.
*/
const pss={
    nome:'Vinicius',
    idade:15,
    cidade:'Capanema'
}
console.log(`Me chamo ${pss.nome}, tenho atualmente ${pss.idade} anos e moro em ${pss.cidade}.
Daqui 10 anos: `)
pss.idade=25
pss.prof='Engenheiro'
delete(pss.cidade)
console.log(`Me chamarei ${pss.nome}, terei ${pss.idade} anos e trabalharei como ${pss.prof}.`)