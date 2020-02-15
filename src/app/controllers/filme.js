const mongoose = require('mongoose')
const FilmeSchema = require('./../models/filme')

class Filme {

    get(req, res) {
        FilmeSchema.find({}, (err, filme) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(200).json({ message: 'Filmes recuperados com sucesso', data: filme })
            }
        })
    }

    create(req, res) {
        FilmeSchema.create(req.body, (err, filme) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(201).json({ message: 'Filme inserido com sucesso', data: filme })
            }
        })
    }

    update(req, res) {
        FilmeSchema.updateOne({ _id: req.params.id }, { $set: req.body }, (err, filme) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(200).json({ message: 'Filme atualizado com sucesso', data: filme })
            }
        })
    }

    delete(req, res) {
        FilmeSchema.deleteOne({ _id: req.params.id }, (err, filme) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(200).json({ message: 'Filme apagado com sucesso', data: filme })
            }
        })
    }
}

module.exports = new Filme()