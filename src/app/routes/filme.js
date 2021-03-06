const express = require('express')
const route = express.Router()
const FilmeController = require('./../controllers/filme')

route.get('/filme', FilmeController.get)
route.get('/filme/:_id', FilmeController.getById)
route.post('/filme', FilmeController.create)
route.put('/filme/:id', FilmeController.update)
route.delete('/filme/:id', FilmeController.delete)

module.exports = route