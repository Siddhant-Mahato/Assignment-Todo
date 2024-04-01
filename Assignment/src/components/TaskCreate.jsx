import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/TaskSlice";
import style from "./TaskCreate.module.css";
import { BsPlus } from "react-icons/bs";

const TaskCreate = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ id: Date.now(), name: task, completed: false }));
      setTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className={`${style.in} mt-8`}>
      <input
        id="addTodoInput"
        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 rounded"
        type="text"
        placeholder="Add Todo"
        value={task}
        onChange={handleTaskChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className={`ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${style.btn}`}
        onClick={handleAddTask}
      >
        <BsPlus size={20} />
      </button>
    </div>
  );
};

export default TaskCreate;
