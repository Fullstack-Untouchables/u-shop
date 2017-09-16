const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  dateOfPurchase: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

Order.prototype.getOrderTotalQuantity = () => {
  let orderItems = this.getOrderItems()
  return orderItems.reduce((total, item) => total += item.quantity)
}

module.exports = Order
