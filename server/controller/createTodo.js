const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    console.log("req body", req.body);
    const {title, description} = req.body;

    //validation
    if (!title || !description) {
        console.log("not all fields...");
        return res.status(400).json({
          status: 400,
          message: "Please fill all fields",
        });
    }

    const todo = await Todo.create({
        title,
        description,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${title}`,
    });
    return res.status(200).json({
      status: 201,
      message: "Todo created successfully",
      data: todo,
    });

  } 
  catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      data:"internal server error in creating todo",
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req,res) => {
  try{
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);
    res.json(
        {
            success:true,
            message:"Todo Deleted",
        }
    )
  }
  catch(err){
      console.log(err);
      res.status(500)
      .json({
          success:false,
          error:err.message,
          message:"cannot get the id from the user"
      });
  }
};


