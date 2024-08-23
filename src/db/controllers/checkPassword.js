const jwt = require("jsonwebtoken");
const User = require("../db/models/users");
 
async function checkToken(req,res,next) {
    try {
        //Creates encrypted password
        const token = req.header("Authorization").replace("Bearer ","");
        console.log(token);
        const privateKey = process.env.JWT_KEY;
        console.log(privateKey);
        const decodedtoken = await jwt.verify(token,privateKey);
        console.log(decodedtoken);
        const userEmail = decodedtoken.email;
        //Finds one user via email
        const checkUserExists = await User.findOne({where:{email:userEmail}});
        //If user doesnt exist throw a new error
        if (checkUserExists === false) {
            throw new Error("User no longer in database")
        } else {
            req.body.email = userEmail;
            //continue to the next function
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Token Check Failed",
            errorMessage: error
        })
       
    }
}
 //Eports file to be used 
module.exports = checkToken