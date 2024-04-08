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

  let taskRender = <h1>No task present</h1>;

  if (tasks.length > 0) {
    taskRender = tasks.map((task, index) => (
      <li className="flex" key={index}>
        <p>{task.title}</p>
        <i className="ri-file-edit-line"></i>
        <i className="ri-delete-bin-2-line"></i>
      </li>
    ));
  }

  return (
    <div className="w-screen h-screen bg-zinc-700 justify-center items-center flex-col">
      <div className='text-5xl'>COUNTER</div>
      <form onSubmit={submitHandler} className=''>
        <input className="text-zinc-900" type="text" placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value={title} />
        <button>ADD</button>
      </form>
      <ul className="list-name">
        {taskRender}
      </ul>
    </div>
  );
};

export default App;
