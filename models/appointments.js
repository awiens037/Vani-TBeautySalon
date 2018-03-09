module.exports = function (sequelize, Datatypes) {
    var Appointments = sequelize.define("appointments", {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Datatypes.INTEGER
        },
 
        services: {
            type: Datatypes.STRING,
            notEmpty: true
        },

        date: {
            type: Datatypes.STRING,
            notEmpty: true
        },

        time: {
            type: Datatypes.STRING,
            notEmpty: true
        },
 
        firstname: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {  
                notEmpty: true,  
                len: [1, 15]
            },
        },

        lastname: {
            type: Datatypes.STRING,
            notEmpty: true,
            validate: {   
                notEmpty: true, 
                len: [1, 15]
            },
        },
 
        email: {
            type: Datatypes.STRING,
            validate: {
                isEmail: true
            },
            validate: {    
                len: [5, 30],
                notEmpty: true
            },
        },
 
        phonenumber: {
            type: Datatypes.STRING,
            validate: {    
                len: [12],
                notEmpty: true
            },
            
        },

       stylist: {
        type: Datatypes.STRING,
        notEmpty: true
       }
    },
{timestamps: false}
);
    return Appointments;
};
