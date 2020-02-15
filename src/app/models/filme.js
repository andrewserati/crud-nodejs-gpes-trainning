const { Schema, model } = require("mongoose")

const FilmeSchema = new Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 100
    },
    descricao: {
        type: String,
        required: false,
        maxlength: 300
    },
    duracao: {
        type: String,
        required: true,
        maxlength: 20
    },
    diretor: {
        type: String,
        required: true,
        maxlength: 100
    },
    genero: {
        type: String,
        required: true,
        maxlength: 50
    },
    status: {
        type: Boolean,
        trim: true,
        maxlength: 1,
        default: 1
    }
},
    {
        versionKey: false,
        timestamps: false
    }
)
module.exports = model('filmeSchema', FilmeSchema)