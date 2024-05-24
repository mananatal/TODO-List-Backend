const mongoose=require("mongoose");
const Todo=require("../model/Todo")

exports.deleteTodo=async (req,res)=>{

    try
    {
        const {id}=req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo deleted successfully"
        })
    }
    catch(err)
    {
        console.log("Error occured while deleting data");
        console.log(err.message);
        
        res.status(500).json({
            success:false,
            data:"OOPS!!",
            message:err.message
        })
    }

}