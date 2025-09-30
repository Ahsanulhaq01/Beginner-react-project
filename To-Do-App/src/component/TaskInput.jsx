import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

function TaskInput() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } else {
      alert("Enter the task first");
    }
  }

  function inputText(event) {
    setNewTask(event.target.value);
  }
  function handlekey(e) {
    if (e.key === "Enter") {
      if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        setNewTask("");
      } else {
        alert("Enter the task first");
      }
    }
  }
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          onChange={inputText}
          value={newTask}
          onKeyDown={handlekey}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} inputText={inputText} />
    </>
  );
}

export default TaskInput;
