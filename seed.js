const pkg = require('./package.json')
const { Product, Category, User } = require('./server/db/models/index')

const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${pkg.name}`)


  // const users = [
  //   {name: 'Oscar', email: 'oscar@gmail.com', isAdmin: true},
  //   {name: 'Bojan', email: 'bojan@gmail.com', isAdmin: true},
  //   {name: 'Jason', email: 'jasonrosso@gmail.com', isAdmin: true},
  //   {name: 'Peter', email: 'peter@gmail.com', isAdmin: true},
  // ]

  const products = [

    {name: 'Shirt', description: 'Polo shirt', quantity: 10, price: 9.95,
      image: 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-25308214_lifestyle_t240.jpg', categoryId: 1},
    {name: 'Pant', description: 'Kaki Pants', quantity: 100, price: 19.95,
      image:'https://www.rei.com/media/product/885652', categoryId: 1},
    { name: 'Merman Suit', description: 'wow', quantity: 100, price: 19.95,
      image:'http://3.bp.blogspot.com/-O-KrR31VEqU/VEOYIXEvxaI/AAAAAAABgqM/mwytYGZKBAU/s1600/merman2.jpg', categoryId: 1 },
    { name: 'Weiner Hat', description: 'wow...so nice', quantity: 100, price: 19.95,
      image:'http://thatisinsane.net/wp-content/uploads/2015/07/hot-dog-hat.jpg', categoryId: 1 },
    { name: 'Rainbow Hat', description: 'very good... ', quantity: 100, price: 19.95,
      image:'https://img.costumecraze.com/images/vendors/rasta/3038-a-Rainbow-Hat-large.jpg', categoryId: 1 },
    { name: 'Tobasco Sauce', description: 'very good... ', quantity: 100, price: 19.95,
      image:'https://static01.nyt.com/images/2014/08/31/magazine/31wmt/mag-31WMT-t_CA0-master1050.jpg', categoryId: 3 },
    { name: 'Balut', description: 'very good... ', quantity: 100, price: 19.95,
      image:'https://i.ytimg.com/vi/jY-hPWdzU60/maxresdefault.jpg', categoryId: 3 },
    { name: 'Casu Marzu', description: 'very good... ', quantity: 100, price: 19.95,
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Casu_Marzu_cheese.jpg/290px-Casu_Marzu_cheese.jpg', categoryId: 3 },
    { name: 'Cheese Whiz', description: 'very good... ', quantity: 100, price: 19.95,
      image:'https://i5.walmartimages.com/asr/b9c049f1-ecda-4ff4-8e96-89ddf2fe0adf_1.398c1a9feeab18da2bed13f4d0898324.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF', categoryId: 3 },
  ]

  const categories = [
    {name: 'Clothes'},
    {name: 'Entertainment'},
    {name: 'Food & Pantry'},
    {name: 'Appliances'},
  ]


const seed = () =>
  // Promise.all(users.map(user =>
  //   User.create(user))
  // )
  //   .then(() =>
      Promise.all(categories.map(category =>
        Category.create(category))
      )
    .then(() =>
      Promise.all(products.map(product =>
        Product.create(product))
      )
    );

const main = () => {
  console.log('Syncing db...', db.config.database)
  db.sync({force: true})
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
      process.exit()
    })
}

main()


