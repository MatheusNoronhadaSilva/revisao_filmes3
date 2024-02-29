/**************************************
 * Objetivo: Arquivo responsável pela manipulação de dados no banco de dados Mysql,
 *         aqui realizamos o CRUD (Create, Read, Update, Delete) utilizando a linguagem SQL
 * Data: 01/02/2024
 * Autor: Matheus Noronha da Silva
 * Versão: 1.0
 */

//Import da biblioteca do prisma client
const { PrismaClient } = require('@prisma/client')

//instancia da classe prisma client
const prisma = new PrismaClient()

const insertFilme = async function(){
    //função para inserir novo filme no banco de dados
}

const updateFilme = async function(){
    //função para atualizar um filme no banco de dados
}

const deleteFilme = async function(){
    //função para excluir um filme no banco de dados
}

const selectAllFilmes = async function(){
    //função para listar todos os filmes do banco de dados

    let sql = 'select * from tbl_filme'

    //$queryRawUnsafe(sql)
    //$queryRawUnsafe('select * from tbl_filme where nome = ' + variavel' )

    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    if(rsFilmes.length > 0)
        return rsFilmes
    else
        return false
}

const selectByNameFilme = async function(nome){


    try {
        let sql = ` select * from tbl_filme where nome like "${nome}%"`
    

        let nomeFilme = await prisma.$queryRawUnsafe(sql)

        return nomeFilme 
        
    } catch (error) {

        return false
        
    }
}

const selectByIdFilme = async function(id){
    //função para buscar um filme do banco de dados pelo id

    try {
        
        let sql = `select * from tbl_filme where id = ${id}`

        let rsFilme = await prisma.$queryRawUnsafe(sql);
    
        console.log(rsFilme);

        return rsFilme

    } catch (error) {

        return false

    }
}

module.exports = {
    selectByNameFilme,
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}