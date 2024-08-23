const User = require("../models/userModels");
 
//Shows all the registerd users within the created table
const listUsers = async(req,res) => {
    try {
        const listOfAllusers = await User.findAll({});
        console.log(listOfAllusers);
        res.status(200).json({
            message: "List of all users in the table is as follows: ",
            userlist: listOfAllusers
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error_message: error})
    }
}
 
//Exports this file to be used elsewhere
module.exports = listUsers