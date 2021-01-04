const { Sequelize } = require('sequelize');

const sequelize = () => {
        return new Sequelize('ReactAndNode', 'postgres', 'postgres', {
            host: 'postgres',
            dialect: 'postgres'
        });
}

module.exports = sequelize;