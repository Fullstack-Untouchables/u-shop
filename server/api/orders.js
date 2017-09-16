const router = require('express').Router();
const { Order } = require('../db/models');
module.exports = router

/*
  Admin function to see orders accross all users.
*/
router.get('/', (req, res, next) => {
  Order.findAll({include: [{all: true, nested: true}]})
  .then(orders => res.json(orders))
  .catch(next)
})

/*
  Fetch an order when orderId is available.
  Admin and logged in users.
*/
router.get('/:orderId', (req, res, next) => {
  const orderId = req.params.productId

  Order.findById(orderId, {include: [{all: true, nested: true}]})
  .then(order => res.json(order))
  .catch(next)
})
