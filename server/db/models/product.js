const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

