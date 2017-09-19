const router = require('express').Router();
const { Order, OrderItem } = require('../db/models');
module.exports = router

/*
  Admin function to see orders accross all users.
*/
router.get('/', (req, res, next) => {
  Order.findAll({include: [{all: true, nested: true}]})
  .then(orders => res.json(orders))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Order.create({
    dateOfPurchase: new Date(),
    userId: 1, // req.body.cartItems[0].userId, req.user.id || req.body.cartItems[0].userId 
    // assumes cartItems is like => [{price: 19.95, quantity: 1}, {price: 21.95, quantity: 10}]
    orderItems: req.body.cartItems
  }, {
    include: [{
      model: OrderItem,
      as: 'orderItems' }]
  })
  .then(order=>res.json(order))
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
