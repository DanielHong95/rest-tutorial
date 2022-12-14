const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("users", {
  references: {
    model: {
      tableName: "users",
      schema: "schema",
    },
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNULL: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;