const jwt = require("jsonwebtoken")

async function login(req, res) {

try {
    //This is the expiration time until the user is logged out
    const experationTime = 60 * 60 * 24 * 7;
    const options = {
        expiresIn: experationTime
    }
    //This is what is shown within the encrypted password
    const payload = {
        email: req.body.email,
        username: req.body.username
    }
    const privateKey = process.env.JWT_KEY
    const token = jwt.sign(payload,privateKey,options);
    console.log(token);
    res.status(200).json({
        message:"JWT token created",
        token:token,
        email: req.body.email
    })
} catch (error) {
    console.log(error);
    //status is the server status a 500 code is an internal server error code
    res.status(500).json({
        message: "Login error",
        errorMessage: error
    })
}
}

//This exports this file to be imported to another one
module.exports = login