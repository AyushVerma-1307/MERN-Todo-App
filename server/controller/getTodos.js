const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
	try {
		const TodoData = await Todo.find({});
		res.json({ success: true, data: TodoData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
