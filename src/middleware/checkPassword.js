const bcrypt = require("bcrypt");
const User = require("../db/models/users");
 
const checkPassword= async (req,res,next) => {
    try {
        //Checks Password to see if its correct
        const plainTextPassword = req.body.password;
        console.log(plainTextPassword);
        const userDetails= await User.findOne({
            where: {
                email: req.body.email
            }
        })
        console.log(userDetails);
        const hashedPassword = userDetails.password;
        console.log(hashedPassword);
        
        //Checks both the plain text password and the encrypted password to see if it matches and if it doesnt throw an error
        const check = await bcrypt.compare(plainTextPassword, hashedPassword);
        console.log(check);
        if (check === true) {
            next()
        } else {
            res.status(400).send("Password incorrect");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "ooop something went wrong...",
            errorMessage: error
        })
       
    }    
}
 //Exports this file to be used in another
module.exports = checkPassword