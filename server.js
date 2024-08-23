require("dotenv").config();
const express = require("express");
const SQLconnection = require("./db/connection");
const User = require("./db/models/users");
const userRouter = require("./routes/userRoutes");
const app = express();
app.use(express.json())

//This is what port it will run on that is stated within the .env but if it cant the itll listen on port 5002
const port = process.env.PORT || 5002;

//This is so you can do a thunderclient get request to see the servers health
app.get("/health",(req,res) => res.status(200).send("API is healthy"));

app.use(userRouter);

User.sync({alter:true});

//This tells the app which port to listen on
app.listen(port, () => console.log(`Server is listening on port ${port}`));