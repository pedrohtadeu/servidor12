const router = require('express').Router()
const ProductController = require('../controllers/products')


//verbos http (4 tip0)
//get - receber dados
//post - enviar/receber dados
//put- atualizar dados
//delete - deletar



router.get('/products/:id?', ProductController.get)
//router.post('/products', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)
module.exports = router