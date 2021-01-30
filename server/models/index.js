const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
const uuid = require('uuid');

const Urls = sequelize.define(
  'Urls',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

Urls.beforeCreate((url) => (url.id = uuid.v4()));

module.exports = Urls;
