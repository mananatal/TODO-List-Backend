
const mongoose=require('mongoose');
const Todo=require('../model/Todo')

exports.getTodos=async (req,res)=>{

    try
    {
        const todo=await Todo.find({});

        if(!todo)
        {
           return res.status(404).json({
                success:false,
                data:"NO data found",
                message:"Database is empty"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Data fetched successfully"
        });
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


exports.getTodoById=async (req,res)=>
{
    try
    {
        const id=req.params.id;

        const todo=await Todo.findById({_id:id});

        if(!todo)
        {
           return res.status(404).json({
                success:false,
                data:"NO data Found",
                message:"Error 404"

            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo get successfully"
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