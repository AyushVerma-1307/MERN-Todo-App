const Todo = require("../models/Todo");

exports.updateTodo = async (req,res) =>{
    try {
        const {id} = req.params;    
        const {title,description} = req.body;

        const newTodo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        );

        res.status(200).json({
            success:true,
            message:"Todo updated Successfully",
            data:newTodo,
        })
    } 
    catch (error) {
        console.log("error in Update Todo :", error);
        res.status(500).json({
            success:false,
            message:"error in update todo"
        })
    }
}