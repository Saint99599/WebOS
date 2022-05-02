const Sequelize = require('sequelize');

const db = new Sequelize('SaltyHouse-Database', 'void', 'cWjWNaqk9LtyZ6jB',{
    host: 'saltyhouse.database.windows.net',
    dialect: 'mssql',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    logging: false,
    schema: 'vip'
});

module.exports = db;