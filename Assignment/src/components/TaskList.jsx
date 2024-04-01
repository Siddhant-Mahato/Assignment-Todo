// TaskList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../store/TaskSlice";
import { BsTrash, BsCheck } from "react-icons/bs";
import style from "./TaskList.module.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  return (
    <div className="container mx-auto">
      <ul
        className={`mt-8 divide-y  shadow-lg p-8 rounded ${
          tasks.length > 0 ? style.b : ""
        }`}
      >
        {tasks.map((task, index) => (
          <li
            key={task.id}
            style={{ border: "1px solid black" }} 
            className={`flex items-center justify-between py-2 px-4 rounded hover:bg-gray-100 focus:border-blue-500 ${
              index !== 0 ? "mt-4" : ""
            }`}
          >
            <span
              className={`flex-1 mr-4 ${
                task.completed ? "line-through text-green-600" : ""
              }`}
            >
              {task.completed ? <del>{task.name}</del> : task.name}
            </span>
            <div className="flex items-center">
              <button
                className="mr-2 p-2 rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                onClick={() => handleDelete(task.id)}
              >
                <BsTrash />
              </button>
              {task.completed ? (
                <button
                  className="mr-2 p-2 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none"
                  onClick={() => handleToggleCompletion(task.id)}
                >
                  Completed
                </button>
              ) : (
                <button
                  className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                  onClick={() => handleToggleCompletion(task.id)}
                >
                  <BsCheck />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
