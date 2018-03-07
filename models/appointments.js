module.exports = function (sequelize, DATATYPES) {
    var appointments = sequelize.define("appointments", {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DATATYPES.INTEGER
        },
 
        services: {
            type: DATATYPES.STRING,
            notEmpty: true
        },

        date: {
            type: DATATYPES.DATE
        },

        time: {
            type: DATATYPES.TIME
        },
 
        firstname: {
            type: DATATYPES.STRING,
            notEmpty: true
        },

        lastname: {
            type: DATATYPES.STRING,
            notEmpty: true
        },
 
        email: {
            type: DATATYPES.STRING,
            validate: {
                isEmail: true
            }
        },
 
        phonenumber: {
            type: DATATYPES.STRING,
            allowNull: false
        }
 

 
        // status: {
        //     type: DATATYPES.ENUM('active', 'inactive'),
        //     defaultValue: 'active'
        // }
 
 
    },
{timestamps: false}
);
    return appointments;
};
