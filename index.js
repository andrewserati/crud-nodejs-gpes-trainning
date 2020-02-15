const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || process.env.APP_PORT || 3000;

// body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

// cors config
app.use(cors());

// requisição de inicio
app.get('/', (req, res) => {
    res.send({ message: 'Esta API foi desenvolvida como treinamento de Angular + NodeJS  correlacionado ao GPES (Grupo de Pesquisa em Engenharia de Software da Fatec Taquaritinga). Esta API contém um CRUD simples de filmes!' })
})

// requisição inicial deu algum problema
app.use('*', (req, res) => res.send({ message: 'API não encontrada' }))

// indicativo de que tá funfando belezinha!
app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}!`))

module.exports = app