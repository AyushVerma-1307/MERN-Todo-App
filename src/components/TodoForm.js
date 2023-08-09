import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const TodoForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createTodo = async (data) => {

    const todo = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createTodo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", todo);
    navigate("/")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createTodo)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Title{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter You Title"
                {...register("title")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="Description"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Description{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Description"
                {...register("description")}
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Todo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
