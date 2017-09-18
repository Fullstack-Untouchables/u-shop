const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
<<<<<<< Updated upstream

=======
router.use('/products', require('./products'))
router.use('/categories', require('./categories'))
router.use('/reviews', require('./reviews'))
router.use('/carts', require('./carts'))
>>>>>>> Stashed changes
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
