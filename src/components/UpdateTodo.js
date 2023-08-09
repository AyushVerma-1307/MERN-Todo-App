import React from 'react'
import { useForm } from 'react-hook-form'

import { Link,useParams } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const UpdateTodo = () => {

    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();
    const {_id} = useParams();

    const updateTodo = async (data) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BASE_URL}/updateTodo/${_id}`,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({ ...data }),
                },
            );
            console.log("FORM RESPONSE......", res);
            navigate("/")
        } 
        catch (error) {
            console.log("error in updating the Todo");
        }
    }
    return (
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
                <img
                className="h-full w-full object-cover object-top"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
                <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-4xl font-bold text-white">
                Empower your Day By Creating a Todo List with Us!
                </h3>
                </div>
            </div>
            </div>

            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Update Todo
                </h2>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                </p>
                <Link
                to={"/"}
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
                >
                    <FaBackward />
                Cancel Update
                </Link>
                <div>
                <form onSubmit={handleSubmit(updateTodo)} className="mt-8">
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
                        Update Todo
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
            </div>
            </div>
        </div>
        </section>
        
    )
}

export default UpdateTodo
