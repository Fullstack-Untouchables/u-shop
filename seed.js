const pkg = require('./package.json')
const {Product, Category, User} = require('./server/db/models/index')

const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${pkg.name}`)

  const users = [
    {name: 'Oscar', email: 'oscar@gmail.com', isAdmin: true},
    {name: 'Bojan', email: 'bojan@gmail.com', isAdmin: true},
    {name: 'Jason', email: 'jasonrosso@gmail.com', isAdmin: true},
    {name: 'Peter', email: 'peter@gmail.com', isAdmin: true},

  ]

  const products = [
    {name: 'Shirt', description: 'Polo shirt', quantity: 10, price: 9.95,
      image: 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-25308214_lifestyle_t240.jpg'},
    {name: 'Pant', description: 'Kaki Pants', quantity: 100, price: 19.95,
      image:'https://www.rei.com/media/product/885652'  },
    { name: 'Merman Suit', description: 'wow', quantity: 100, price: 19.95,
      image:'http://3.bp.blogspot.com/-O-KrR31VEqU/VEOYIXEvxaI/AAAAAAABgqM/mwytYGZKBAU/s1600/merman2.jpg' },
    { name: 'Weiner Hat', description: 'wow...so nice', quantity: 100, price: 19.95,
      image:'http://thatisinsane.net/wp-content/uploads/2015/07/hot-dog-hat.jpg' },
    { name: 'Rainbow Hat', description: 'very good... ', quantity: 100, price: 19.95,
      image:'https://img.costumecraze.com/images/vendors/rasta/3038-a-Rainbow-Hat-large.jpg' },
    
  ]

  const categories = [
    {name: 'Clothes'},
    {name: 'Entertainment'},
    {name: 'Food & Pantry'},
    {name: 'Appliances'},
    {name: 'Clothes'}

  ]

  const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(categories.map(category =>
    Category.create(category))
  ))
  .then(() =>
  Promise.all(products.map(product =>
    Product.create(Object.assign({}, product,
      {categories: [
        {name: 'Clothing'}
      ]
    }), {
      include: [ Category ]
    }))
  )
);
  /* const seedUsers = () =>
  Promise.all(users.map(user =>
    User.create(user))}
  )

  const seedCategories = () =>
  Promise.all(categories.map(category =>
    Category.create(category))
  )


  var currentProduct = {};
  const seedProducts = () =>
  Promise.all(products.map(product =>
    Product.create(product)
    .then(product => {
      currentProduct = product;
      Category.findOne({
        where: {
          name: 'Clothes'
        }
      })
      .then(category => currentProduct.setCategory(category))
    }))
  ) */

const main = () => {
  console.log('Syncing db...')
  db.sync({ force: true })
  .then(() => {
    console.log('Seeding database...')
    return seed()
  })
    /* .then(() => {
      console.log('Seeding database...')
      return seedUsers()
    })
    .then(() => {
      console.log('Seeding database...')
      return seedCategories()
    })
    .then(() => {
      console.log('Seeding database...')
      return seedProducts()
    }) */
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
      console.log(err.errors)
    })
    .then(() => {
      db.close()
      console.log('Seeding completed...')
      return null
    })
}

main()



