const User = require("../db/models/users");
 
//this is an A synchronis function that registers User
async function registerUser(req,res) {
    try {
        //this waits for the user to be created
        const user = await User.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        );
        console.log(user);
        //status is the server status code any 200 is an OK code
        res.status(201).send(`User ${req.body.username} has been created.`)
        //this will catch it when user is not found and send an error
    } catch (error) {
        console.log(error);
        //status is the server status code any 400 is an error code
        res.status(418).json({
            msg: "Database Error",
            error: error
        })
    }
}
 
//exports this file to be accessed within whichever file that this gets imported in
module.exports = registerUser;