const jwt = require("jsonwebtoken");
const User = require("../db/models/userModels");
 
async function checkToken(req,res,next) {
    try {
        //Checks for the correct password then authorizes it
        const token = req.header("Authorization").replace("Bearer ","");
        console.log(token);
        const privateKey = process.env.JWT_KEY;
        console.log(privateKey);
        const decodedtoken = await jwt.verify(token,privateKey);
        console.log(decodedtoken);
        const userEmail = decodedtoken.email;
        const checkUserExists = await User.findOne({where:{email:userEmail}});
        if (checkUserExists === false) {
            throw new Error("User no longer in database")
        } else {
            req.body.email = userEmail;
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
 
module.exports = checkToken