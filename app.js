/**
 * Para realizar a integração com o Banco de Dados devemos
 * utilizar uma das seguintes bibliotecas:
 * - SEQUELIZE - É a biblioteca mais antiga
 * - PRISMA ORM - É a biblioteca mais atual (utilizaremos no projeto)
 * - FASTFY ORM - É a biblioteca mais atual
 * 
 * Para a instalação do PRISMA ORM:
 *    npm install prisma --save        (É responsavel pela conexão com o BD)
 *    npm install @prisma/client --save  (É responsável por executar scripts SQL no BD)
 *    npx prisma init  (inicializar o prisma no projeto)
 * 
 */




const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Acesss-Control-Allow-Methods', 'GET')


    app.use(cors())


    next()
})

app.use(cors())

/*********************Import dos arquivos de Controller do projeto **********************/

const controllerFilmes = require('./controller/controller_filmes.js')

const filmesDAO = require('./model/DAO/filme.js')

/************************************ */


//Endpoint: Versão 1.0 que retorna os dados de um arquivo de filmes
//Período de utilização 01/2024 até 02/2024
app.get('/v1/acmeFilmes/filmes', cors(), (request, response) => {

    let controleFilmes = require('./controller/funcoes')

    const listaFilmes = controleFilmes.getListaFilmes()
    if (listaFilmes) {
        res.json(listaFilmes)
    } else {
        res.status(404).json({ erro: 'nenhum filme foi encontrado' })
    }
})

app.get('/v2/acmeFilmes/filmes', cors(), async function (request, response) {

    let dadosFilmes = await controllerFilmes.getListarFilmes()

    if (dadosFilmes) {
        response.json(dadosFilmes)
        response.status(200)
    } else {
        response.json({ message: 'nenhum registro encontrado' })
        response.status(404)
    }
})

app.get('/v2/acmeFilmes/filmes/filtro', cors(), async function (req, response) {

    const nome = req.query.nome
    console.log(nome)
    const listaNomes = await controllerFilmes.getNomeFilme(nome)

    response.status(listaNomes.status_code)
    response.json(listaNomes)
})

app.get('/v2/acmeFilmes/filme/:id', cors(), async function(request, response){

    let idFilme = request.params.id
    
    let dadosFilme = await controllerFilmes.getBuscarFilme(idFilme)

    response.status(dadosFilme.status_code)
    response.json(dadosFilme)
})

app.get('/v1/acmeFilmes/:id', cors(), (req, res) => {

    let idFilme = req.params.id
    let controleFilmesId = require('./controller/funcoes')
    const listaFilmesId = controleFilmesId.getListaFilmeId(idFilme)
    console.log(listaFilmesId)
    if (listaFilmesId) {
        res.json(listaFilmesId)
    } else {
        res.status(404).json({ erro: 'nenhum filme com esse id foi encontrado' })
    }
})

// app.get('/v1/acmeFilmes/filmes/nomes', cors(), (req, res) => {

//     let controleNomes = require('./controller/funcoes')
//     const listaNomes = controleNomes.getListaFilmesNomes()
//     if (listaNomes) {
//         res.json(listaNomes)
//     } else {
//         res.status(404).json({ erro: 'nenhum nome de filme foi encontrado' })
//     }
// })

const PORT = 5080
app.listen(PORT, () => {
    console.log(`foiiii ${PORT}`)
})

