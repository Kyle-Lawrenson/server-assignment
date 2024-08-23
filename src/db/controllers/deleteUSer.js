const User = require("../models/userModels");
 
//This is what deletes a user from the table using thier username
const deleteUser = async (req, res) => {
  try {
    const result = await User.destroy({where: {username: req.body.username}})
 
    res.status(201).json({
        message: `User ${req.body.username} has been removed`
    })
  } catch (error) {
    console.log(error);
    res.status(418).json({
      message: "Something has gone wrong",
      error: error,
    });
  }
};
 
//Exports this file to be used elsewhere
module.exports = deleteUser;