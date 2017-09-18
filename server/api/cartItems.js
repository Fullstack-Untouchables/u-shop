const router = require('express').Router()
const { Cart, User, Product } = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
    res.json(req.session.cart)
})

router.post('/', (req, res, next) => {
    console.log('cart item body', req.body)
    if (req.session.cart) {
        req.session.cart = [...req.session.cart, {
            id: req.body.id,
            price: req.body.price,
            name: req.body.name,
            image: req.body.image
        }]
    } else {
        req.session.cart = [{
            id: req.body.id,
            price: req.body.price,
            name: req.body.name,
            image: req.body.image
        }]
    }
    console.log("session", req.session)
    res.sendStatus(201)
})

router.delete('/', (req, res, next) => {
    req.session.cart = []
    res.sendStatus(204)
})

router.put('/:productId', (req, res, next) => {

})

router.delete('/:productId', (req, res, next) => {
    req.session.cart = req.session.cart.filter(item => item.id != req.params.productId)
    console.log(req.session)
    res.sendStatus(204)
})
