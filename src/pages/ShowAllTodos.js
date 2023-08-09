import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card"

const ShowAllTodos = () => {
  const [todoData, setTodoData] = useState([]);

  const getAllData = async () => {
    try {
      const getTodo= await fetch(
        `${process.env.REACT_APP_BASE_URL}/getallTodos`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getTodo.json();
      setTodoData(res?.data);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(todoData);

  return (
    <>
      <section className="container px-4 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium text-gray-800 dark:text-white">
              Todos
            </h2>
            <p className="mt-1 text-lg text-gray-500 dark:text-gray-300">
              This is a list of all Todos. You can add new Todo, edit
              or delete existing ones.
            </p>
          </div>
          <Link to={"/addTodo"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-6 py-3.5 text-lg font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Add Todo
              </button>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-6xl m-4 outline-dashed rounded-md px-5 py-3 text-gray-200">TODOS</h2>
        </div>
        <div className="flex justify-center flex-wrap max-w-[1300px] mx-auto ">
          {todoData.map((todo) => {
            return <Card key={todo._id} setTodoData={setTodoData} todoData={todoData} todo={todo} ></Card>;
          })}
          </div>
      </section>
    </>
  );
};

export default ShowAllTodos;
