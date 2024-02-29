/*
Objetivo: Arquivo responsável pela padronização de variáveis e constantes globais do projeto

*/

const ERROR_INVALID_ID = {

    status: false,
    status_code: 400,
    message: 'o ID encaminhado na requisição não é valido!!'
} 

const ERROR_NOT_FOUND = {

    status: false,
    status_code: 404,
    message: 'Não foi encontrado nenhum item com este id'
}

const ERROR_INTERVAL_SERVER_DB = {
    status: false,
    status_code: 500,
    message: 'Não foi possível processar a requisição, devido a um erro no acesso ao Banco de Dados. Contate o administrador da API !!'
}

module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERVAL_SERVER_DB
}