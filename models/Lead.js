'use strict';
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', { 
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID, 
            defaultValue: Sequelize.UUIDV4, 
        }, 
        email: { 
            allowNull: false,
            type: Sequelize.STRING 
        }, 
    }); 
    return Lead;
};
    