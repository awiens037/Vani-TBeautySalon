module.exports = function(sequelize, DATATYPES) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DATATYPES.INTEGER
        },
 
        firstname: {
            type: DATATYPES.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: DATATYPES.STRING,
            notEmpty: true
        },
 
        username: {
            type: DATATYPES.TEXT
        },
 
        about: {
            type: DATATYPES.TEXT
        },
 
        email: {
            type: DATATYPES.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DATATYPES.STRING,
            allowNull: false
        },
 
        last_login: {
            type: DATATYPES.DATE
        },
 
        status: {
            type: DATATYPES.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}