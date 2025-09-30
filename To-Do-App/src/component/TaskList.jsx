import React, { useState } from "react";

function TaskList({ tasks, setTasks }) {
  const [currentTask, setCurrentTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function deleteTask(delete_Index) {
    let newarray = tasks.filter((_, i) => i !== delete_Index);
    setTasks(newarray);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setCurrentTask(tasks[index]); // pre-fill with current task
  }

  function handleInputchange(event) {
    setCurrentTask(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      let updatedTasks = [...tasks];
      updatedTasks[editIndex] = currentTask; // update only that task
      setTasks(updatedTasks);
      setEditIndex(null);
    }
  }

  return (
    <ul>
      {tasks.map((task, index) =>
        editIndex === index ? (
          <input
            type="text"
            placeholder="edit the task"
            onChange={handleInputchange}
            onKeyDown={handleKeyDown}
            value={currentTask}
            key={index}
          />
        ) : (
          <li className="list-item" key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button className="edit-button" onClick={() => handleEdit(index)}>
              Edit
            </button>
          </li>
        )
      )}
    </ul>
  );
}

export default TaskList;
