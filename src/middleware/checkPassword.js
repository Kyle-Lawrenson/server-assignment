const bcrypt = require("bcrypt");
const User = require("../db/models/userModels");
 
const checkPassword= async (req,res,next) => {
    try {
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
 
module.exports = checkPassword