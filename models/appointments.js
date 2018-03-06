module.exports = function (sequelize, DataTypes) {
    var appointments = sequelize.define("appointments", {
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
            // defaultValue: "",
            // validate: {
            //     len: [1, 140]
            // },
        },
        email: DataTypes.STRING,
        service: DataTypes.STRING,
        stylist: DataTypes.STRING,
        date: DataTypes.DATE,
        time: DataTypes.TIME
    });
    return appointments;
};