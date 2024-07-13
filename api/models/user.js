// user.js
import { DataTypes } from 'sequelize';

const User = (sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Definir la relación con Product
  User.hasMany(sequelize.models.Product, { as: 'userProducts', foreignKey: 'userId' });

  return User;
};

export default User;
