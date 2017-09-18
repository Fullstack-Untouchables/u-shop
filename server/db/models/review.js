const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('review', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
