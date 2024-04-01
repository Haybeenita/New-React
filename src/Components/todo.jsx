import { useState } from "react";
import ToggleText from "./Assignment";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-blue-900 w-[30rem] h-[20rem] flex flex-col items-center ml-[30rem] rounded-2xl">
      <h1 className="flex justify-center mt-[1rem] mb-[1rem] text-white">TO DO LIST</h1>

      <div className=" ml-[1rem] text-gray-300 mb-[0.3rem]">
        <input
        className="h-[2rem] w-[15rem]"
          type="text"
          placeholder="  Enter task..."
          value={newTask}
          onChange={handleChange}
        />
        <button className="ml-[1rem] border p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer w-[6rem]" onClick={addTask}>
          ADD TODO
        </button>
      </div>

      <ol className="list-disc">
        {tasks.map((task, index) => (
          <li key={index} className="mb-[1rem]">
            <span className="font-normal text-base text-white">{task}</span>
            <button className="ml-[1.5rem] border p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer text-white w-[5rem]" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
      <div>
        <p className="text-white">Value: {newTask}</p>
        <p className="text-white">Count :{newTask.length}</p>
      </div>
      <ToggleText/>
      
    </div>
  );
};

export default ToDoList;



