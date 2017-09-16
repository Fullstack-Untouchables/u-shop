const pkg = require('./package.json')
const { Product, Category, User } = require('./server/db/models/index')

const Sequelize = require('sequelize');
const db = new Sequelize(
  //process.env.DATABASE_URL ||
  `postgres://oscar:tra1n1ng@localhost:5432/${pkg.name}`)

const users = [
  { name: 'Oscar', email: 'oscar@gmail.com', isAdmin: true },
  { name: 'Bojan', email: 'bojan@gmail.com', isAdmin: true }

]

const products = [
  { name: 'Shirt', description: 'Polo shirt', quantity: 10, price: 9.95 },
  { name: 'Pant', description: 'Kaki Pants', quantity: 100, price: 19.95 }

]

const categories = [
  { name: 'Clothes' }
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
          {
            categories: [
              { name: 'Clothing' }
            ]
          }), {
            include: [Category]
          }))
      )
    );

const main = () => {
  console.log('db url is: ', process.env.DATABASE_URL)
  console.log('Syncing db...', db.config.database)
  db.sync()
    .then(() => {
      console.log('Seeding database...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
      console.log(err.errors)
    })
    .then(() => {
      db.close()
      console.log('Seeding completed...')
      return exitCode
    })
}

main()
process.exit()


