import { Sequelize } from 'sequelize';
import ProductModel from './product.js';
import UserModel from './user.js';
import dotenv from 'dotenv';
dotenv.config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
const sequelize = new Sequelize("postgres://default:vPCJV5yiA6en@ep-flat-sun-a4e4e1aj.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
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

const User = UserModel(sequelize);
const Product = ProductModel(sequelize);

db.User = User;
db.Product = Product;

db.User.hasMany(db.Product, { as: 'products', foreignKey: 'userId' });
db.Product.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });

(async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Database & tables synchronized!');
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  }
})();

export default db;
