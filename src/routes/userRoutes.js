const {Router} = require("express");
//Shows where to look for stated function
const registerUser = require("../db/controllers/registerUser");
const hashPassword = require("../middleware/hashPassword");
const listUsers = require("../db/controllers/listUser");
const checkPassword = require("../middleware/checkPassword");
const deleteUser = require("../db/controllers/deleteUSer");
const updatePassword = require("../db/controllers/changePassword");
const login = require("../db/controllers/loginUser");
const checkToken = require("../middleware/checkToken");

const userRouter = Router();
//Thunderclient requests 
userRouter.post("/users/register",hashPassword, registerUser);
userRouter.get("/users/listUser",checkToken,listUsers);
userRouter.delete("/users/deleteUser",checkToken,deleteUser);
userRouter.put("/users/updatePassword",checkToken,updatePassword);
userRouter.post("/users/login",checkPassword, login);

//Exports this file to be used elsewhere
module.exports = userRouter;