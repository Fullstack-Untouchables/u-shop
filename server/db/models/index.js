const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const Cart = require('./cart')


/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Product.hasMany(Review)
Review.belongsTo(Product)

Product.belongsToMany(Category, {through: 'CategoryProduct'})
Category.belongsToMany(Product, {through: 'CategoryProduct'})

User.hasMany(Review)
Review.belongsTo(User)

Cart.belongsTo(User)
User.hasOne(Cart)




/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {

  User,
  Product,
  Category,
  Review,
  Cart
}
