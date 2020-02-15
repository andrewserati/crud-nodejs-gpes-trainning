const mongoose = require("mongoose")
require('dotenv').config()

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('Banco de dados conectado!'))
    .catch(error => {
        console.log(`Problema ao contectar com o banco de dados: ${error.message}`);
    });