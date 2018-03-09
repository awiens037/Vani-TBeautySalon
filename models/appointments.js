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
            type: Datatypes.DATEONLY,
            notEmpty: true
        },

        time: {
            type: Datatypes.TIME,
            notEmpty: true
        },
 
        firstname: {
            type: Datatypes.STRING,
            notEmpty: true
        },

        lastname: {
            type: Datatypes.STRING,
            notEmpty: true
        },
 
        email: {
            type: Datatypes.STRING,
            validate: {
                isEmail: true
            },
            notEmpty: true
        },
 
        phonenumber: {
            type: Datatypes.STRING,
            notEmpty: true
            
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
