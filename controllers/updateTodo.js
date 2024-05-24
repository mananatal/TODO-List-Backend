
const mongoose=require("mongoose");

const Todo=require("../model/Todo")

 exports.updateTodo=async (req,res)=>{

    try
    {   
        const {id}=req.params;

        const {title,description}=req.body;

        const result= await Todo.findByIdAndUpdate(
            {
                _id:id
            }
            ,
            {
                title,
                description,
                updatedAt:Date.now()
            }
        );

        res.status(200).json({
            success:true,
            data:result,
            message:"Data updated successfully"
        })
    }
    catch(err)
    {
        console.log("Error occured while getting data");
        console.log(err.message);
        
        res.status(500).json({
            success:false,
            data:"OOPS!!",
            message:err.message
        })
    }
}