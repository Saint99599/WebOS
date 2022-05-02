const Sequelize = require('sequelize');
const db = require('../config/database');

const Member = db.define('Member', {
    StudentID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    FName: {
        type: Sequelize.STRING
    },
    LName: {
        type: Sequelize.STRING
    },
    Sex: {
        type: Sequelize.STRING
    },
    Degree: {
        type: Sequelize.STRING
    },
    Faculty: {
        type: Sequelize.STRING
    },
    Address: {
        type: Sequelize.STRING
    },
});

module.exports = Member;