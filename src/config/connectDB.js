const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hoidanit', 'root', 'sonlam4403', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let DB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = DB;