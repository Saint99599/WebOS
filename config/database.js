const Sequelize = require('sequelize');

const db = new Sequelize('saltyhouse-database', 'void', 'cWjWNaqk9LtyZ6jB',{
    host: 'korkuefood.database.windows.net',
    dialect: 'mssql',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    logging: false,
    schema: 'dbo'
});

module.exports = db;