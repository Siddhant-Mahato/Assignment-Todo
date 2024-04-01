// TaskSlice.js

import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadTasksFromLocalStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleTaskCompletion: (state, action) => {
      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;

export default taskSlice.reducer;
