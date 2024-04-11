import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { title, completef: false };
    console.log(newTask);

    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);

    setTitle("");
  };

  let taskRender = <h1 className="text-white">No task present</h1>;

  if (tasks.length > 0) {
    taskRender = tasks.map((task, index) => (
      <li className="flex items-center justify-between bg-gray-800 p-4 rounded-md mb-2" key={index}>
        <p className="text-white">{task.title}</p>
        <div className="flex space-x-2">
          <i className="ri-file-edit-line text-blue-500 cursor-pointer"></i>
          <i className="ri-delete-bin-2-line text-red-500 cursor-pointer"></i>
        </div>
      </li>
    ));
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className='text-5xl text-white mb-8'>TASK BAR</div>
      <form onSubmit={submitHandler} className='flex space-x-2 mb-4'>
        <input className="text-gray-900 rounded-md p-2" type="text" placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value={title} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">ADD</button>
      </form>
      <ul className="w-full max-w-md">{taskRender}</ul>
    </div>
  );
};

export default App;
