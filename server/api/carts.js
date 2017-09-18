const router = require('express').Router()
const {Cart, User, Product} = require('../db/models');
module.exports = router

router.get('/',(req,res,next)=>{
    Cart.findAll({include:[{all:true, nested:true}]})
    .then(carts=>res.json(carts))
    .catch(next)
})

router.post('/',(req,res,next)=>{
    User.findOne({
        where:{
            name: "Oscar"
        }
    })
    .then(user=>{
        Cart.create({
            userId: user.id,
        })
    })
    .then(cart=>res.json(cart))
    
    .catch(next)    
})

router.get('/:cartId', (req,res,next)=>{
    const cartId = req.params.cartId
    Cart.findById(cartId,{include: [{all: true, nested:true}]})
    .then(cart=>res.json(cart))
    .catch(next)
})

router.put('/:cartId',(req,res,next)=>{
    
})


router.post('/:cartId/products', (req,res,next)=>{
    const cartId =req.params.cartId
    const product = req.body
    req.cart.createProduct(req.body)
    .then(cart=>res.json(cart))
})