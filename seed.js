const pkg = require('./package.json')
const User = require('./server/db/models/user')
const Product = require('./server/db/models/product')

const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${pkg.name}`)

  const users = [
    {name: 'Oscar', email: 'oscar@gmail.com', isAdmin: true},
    {name: 'Bojan', email: 'bojan@gmail.com', isAdmin: true}

  ]

  const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )

const main = () => {
  console.log('Syncing db...')
  db.sync({ force: true })
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
      return null
    })
}

main()



