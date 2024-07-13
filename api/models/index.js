import { Sequelize } from 'sequelize';
import ProductModel from './product.js';
import UserModel from './user.js';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {};
db.sequelize = sequelize;
const Product = ProductModel(sequelize);
const User = UserModel(sequelize);
db.Product = Product;
db.User = User;

db.User.hasMany(db.Product, { as: 'products', foreignKey: 'userId' });
db.Product.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  });

export default db;