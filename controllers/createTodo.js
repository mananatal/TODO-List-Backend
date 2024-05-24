//importing Todo Schema
const Todo=require("../model/Todo");

//Creating route handler

exports.createTodo=async (req,res)=>{

    try{
        //fetching title and description from the request body
        const {title,description}=req.body;
        //inserting title and description in mongoDB
        const result= await Todo.create({title,description});
        //sending json response with success flag
        res.status(200).json(
            {
                success:true,
                data:result,
                message:"Data Entered Successfully"
            }
        )
    }
    catch(err)
    {
        console.log("Error while Creating Todo");
        console.log(err.message);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }

}
