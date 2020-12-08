// Connecting my 'burger_db' database to the project
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/burger_db')

// Exporting the 'burger_db' database
module.exports = sequelize