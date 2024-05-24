const express=require('express');
const app=express();

require("dotenv").config();

const PORT=process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT,()=>{
    console.log("Server Started Successfully at Port",PORT);
});

const todoRoutes=require("./routes/todos");
//mount the todo to API routes
app.use("/api/v1",todoRoutes);


//connecting to db
const mongoose=require("mongoose");
const dbconnector=require("./config/dbconnector");
dbconnector();

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
});