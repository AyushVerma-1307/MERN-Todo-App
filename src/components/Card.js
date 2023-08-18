import React from 'react'
import { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Card = ({ setTodoData,todoData,todo}) => {
    const navigate = useNavigate();
    const {_id,image,title,description} = todo;

    const [readmore, setReadmore] = useState(false);
    const words = description.split(' ');
    const subDescription = readmore ? description : words.slice(0, 10).join(' ');

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    function updateTodo(){
        navigate(`/updateTodo/${_id}`);
    }

    const handleDelete = async(_id)=>{
        console.log("id:",_id);
        try {
            const deleteTodo = await fetch(
                `${process.env.REACT_APP_BASE_URL}/deleteTodo/${_id}`,
                {
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json",
                    },
                }
            );
            const res = await deleteTodo.json();
            console.log("response from deleting a todo:",res);
            setTodoData((data) => {
                return data.filter((todo) => todo._id !== _id);
            });
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='w-[300px]  min-h-[350px] p-2 m-[1rem] flex flex-col rounded-2xl items-center transition-all bg-slate-200 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  hover:scale-105 sm:hover:scale-110 md:hover:scale-105 lg:hover:scale-110 hover:shadow-[0_10px_40px_rgba(240,_46,_170,_0.7)] relative'>
            <img src={image} alt={title} className="transition-duration-2.5s w-[100px] h-[100px]  rounded-full" />
            <div className='pr-3 pb-4 pl-3 pt-2 flex flex-col'>
                <div className='pb-3'>
                    <h6 className="my-2 mx-0 text-xl font-semibold text-red-600 tracking-wide font-sans">{title}</h6>
                    <div className='text-justify text-base'>
                        {subDescription}
                        {words.length > 10 &&
                            <span className="text-cyan-500 cursor-pointer" onClick={readmoreHandler}>
                                {readmore ? 'Show Less' : 'Read More'}
                            </span>
                        }
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-center items-center pt-7 ml-1 mr-1 absolute bottom-2'>

                    <button className='flex justify-center w-[50%] text-sm p-2 rounded-full text-white bg-gray-800 shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] hover:bg-gradient-to-r from-fuchsia-600 to-pink-600'
                    onClick={()=> updateTodo()}>
                        <FaRegEdit size="28px"/>
                    </button>

                    <button className="flex w-[50%] justify-center p-2 sm:text-sm rounded-full  bg-red-300 hover:bg-red-600"
                    name={_id}
                    onClick={() => handleDelete(_id)}>
                    <AiFillDelete size="28px" />
                    </button>
                </div>
        </div>
    );
}

export default Card
