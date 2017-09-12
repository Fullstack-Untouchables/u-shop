const router = require('express').Router();
const { Review } = require('../db/models');
module.exports = router


router.get('/', (req, res, next) => {
  Review.findAll({include: [{all: true, nested: true}]})
  .then(reviews => res.json(reviews))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(review => res.json(review))
  .catch(next)
})

router.get('/:reviewId', (req, res, next) => {
  const reviewId = req.params.reviewId

  Review.findById(reviewId, {include: [{all: true, nested: true}]})
  .then(review => res.json(review))
  .catch(next)
})

router.put('/:reviewId', (req, res, next) => {
  const reviewId = req.params.reviewId

  Review.findById(reviewId)
  .then(review => review.update(req.body, {returning:true}))
  .then(updated => {
    // console.log(updated.dataValues)
    // res.status(204).json(updated.review)}
    res.status(200).json(updated)
  })
  .catch(next)
})

router.delete('/:reviewId', (req, res, next) => {
  const reviewId = req.params.reviewId

  Review.destroy({
    where: {
      id: reviewId
    }
  })
  .then(() => res.status(204).end())
  .catch(next)
})
