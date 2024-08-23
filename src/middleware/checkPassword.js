const bcrypt = require("bcrypt");
const User = require("../db/models/userModels");
 
const checkPassword= async (req,res,next) => {
    try {
        //Checks for the correct plain text password then finds the one user based on that password
        const plainTextPassword = req.body.password;
        console.log(plainTextPassword);
        const userDetails= await User.findOne({
            where: {
                email: req.body.email
            }
        })
        console.log(userDetails);
        //changes the plain text password into a hashedpassword and assigns it to the stated user
        const hashedPassword = userDetails.password;
        console.log(hashedPassword);
        
        //Compares the passwords to check if its the right one then it logs the user in
        const check = await bcrypt.compare(plainTextPassword, hashedPassword);
        console.log(check);
        if (check === true) {
            //If it matches it moves on to the next function
            next()
            //If it doesnt match then it errors
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
 
//Exports this file to be used elsewhere
module.exports = checkPassword