const {Sequelize} = require("sequelize");

const SQLconnection = new Sequelize(process.env.MYSQL_URI);

try {
    //This connects it to the database on cleaver cloud
    SQLconnection.authenticate();
    console.log("Successfully connected to Database");}
catch (error) {
    console.log(error);}

//Exports this file to be used elsewhere
module.exports = SQLconnection