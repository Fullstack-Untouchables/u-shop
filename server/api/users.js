const router = require('express').Router()
const {User, Order} = require('../db/models');
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(next)
})

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId

  User.findById(userId)
  .then(user => res.json(user))
  .catch(next)
})

router.put('/:userId', (req, res, next) => {
  const userId = req.params.userId

  User.findById(userId)
  .then(user => user.update(req.body, {returning:true}))
  .then(updated => {
    // console.log(updated.dataValues)
    // res.status(204).json(updated.user)}
    res.status(200).json(updated)
  })
  .catch(next)
})

router.delete('/:userId', (req, res, next) => {
  const userId = req.params.userId

  User.destroy({
    where: {
      id: userId
    }
  })
  .then(() => res.status(204).end())
  .catch(next)
})

router.get('/:userId/orders', (req, res, next) => {
  let userId = req.params.userId

  Order.findAll({
    where: {
      purchaser: userId
    }
  })
})

