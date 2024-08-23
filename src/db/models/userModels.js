const SQLconnection = require("../connection");
const {DataTypes} = require("sequelize");

//This is the fields that display within the created table
const User = SQLconnection.define("User",{

    //Data type BIGINT is a big number
    user_id: {
        type: DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey: true,
        unique:true,
        allowNull: false
    },
    username: {
        // Data type STRING is a string of text
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        unique: false,
    }
})

//Export this one to another file
module.exports = User;