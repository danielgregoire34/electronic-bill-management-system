const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {}

Account.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    account_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Account;