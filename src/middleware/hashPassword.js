const bcrypt = require("bcrypt");
//This grabs the password and changes it to the encypted password
const hashPassword = async (req, res, next) => {
    try {
        plainTextPassword = req.body.password;
        saltRounds = parseInt(process.env.SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            error: error
        })
    }
}

//Exports this file to be used elsewhere
module.exports = hashPassword