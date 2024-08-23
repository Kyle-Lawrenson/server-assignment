const User = require("../db/models/users");
const bcrypt = require("bcrypt");
 
async function updatePassword(req,res) {
  
  try {
    //This tells it how many times to encrypt the password, the number of times is stated within the .env
    saltRounds = parseInt(process.env.SALT_ROUNDS);
    const hashedNewPassword = await bcrypt.hash(req.body.newPassword, saltRounds);
    console.log(hashedNewPassword)
    const result = await User.update({password: hashedNewPassword},{
      where: {
        email: req.body.email
      }
    })
    console.log(result);
    res.status(200).json({
      message: "Password updated",
      results: result
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "oops password not updated",
      errorMessage: error
    })
  }
}
 
//Exporting for use within another file
module.exports = updatePassword