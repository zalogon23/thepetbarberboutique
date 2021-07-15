import { Sequelize, DataTypes } from "sequelize";

const sequelize = process.env.NODE_ENV === "production" ?
  new Sequelize(process.env.DATABASE_URL, { logging: false })
  :
  new Sequelize(
    process.env.DEVELOPMENT_DATABASE_NAME,
    process.env.DEVELOPMENT_DATABASE_USER,
    process.env.DEVELOPMENT_DATABASE_PASS, {
    host: "localhost",
    dialect: "postgres",
    logging: false
  })

const Users = sequelize.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { freezeTableName: true })

sequelize.sync({ alter: true })

export { Users }