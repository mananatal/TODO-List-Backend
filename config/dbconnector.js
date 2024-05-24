const mongoose=require('mongoose')

require("dotenv").config();

const dbConnector=()=>{

    mongoose.connect(process.env.DatabaseUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("Connected Successfully"))
    .catch((err)=>{
        console.log("Error while connecting to database");
        console.log(err.message);
        process.exit(1);
    })

}

module.exports=dbConnector;