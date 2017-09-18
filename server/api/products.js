const router = require('express').Router();
const { Product } = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll({include: [{all: true, nested: true}]})
  .then(products => res.json(products))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Product.create(req.body)
  .then(product => res.json(product))
  .catch(next)
})

router.get('/:productId', (req, res, next) => {
  const productId = req.params.productId

  Product.findById(productId, {include: [{all: true, nested: true}]})
  .then(product => res.json(product))
  .catch(next)
})

router.put('/:productId', (req, res, next) => {
  const productId = req.params.productId

  Product.findById(productId)
  .then(product => product.update(req.body, {returning:true}))
  .then(updated => {
    // console.log(updated.dataValues)
    // res.status(204).json(updated.product)}
    res.status(200).json(updated)
  })
  .catch(next)
})

router.delete('/:productId', (req, res, next) => {
  const productId = req.params.productId

  Product.destroy({
    where: {
      id: productId
    }
  })
  .then(() => res.status(204).end())
  .catch(next)
})
