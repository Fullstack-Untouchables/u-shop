const router = require('express').Router();
const { Category, Product } = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll({include: [{all: true, nested: true}]})
  .then(categories => res.json(categories))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Category.create(req.body)
  .then(category => res.json(category))
  .catch(next)
})

router.get('/:categoryId', (req, res, next) => {
  const categoryId = req.params.categoryId

  Category.findById(categoryId, {include: [{all: true, nested: true}]})
  .then(category => res.json(category))
  .catch(next)
})

router.put('/:categoryId', (req, res, next) => {
  const categoryId = req.params.categoryId

  Category.findById(categoryId)
  .then(category => category.update(req.body, {returning: true}))
  .then(updated => {
    // console.log(updated.dataValues)
    // res.status(204).json(updated.category)}
    res.status(200).json(updated)
  })
  .catch(next)
})

router.delete('/:categoryId', (req, res, next) => {
  const categoryId = req.params.categoryId

  Category.destroy({
    where: {
      id: categoryId
    }
  })
  .then(() => res.status(204).end())
  .catch(next)
})
