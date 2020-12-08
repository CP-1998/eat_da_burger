// Declaring required dependencies
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

// Declaring the 'Burger' model to packed and shipped
class Burger extends Model { }

// Building the data architecture for the 'Burger' model
Burger.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize, modelName: 'burger' })

sequelize.sync()

// Exporting the 'Burger' model
module.exports = Burger