const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('orderItem', {
  productId: {
    type: Sequelize.Integer,
    allowNull: false
  },
  quantity: {
    type: Sequelize.Integer,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})
