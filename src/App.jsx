import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([
    { title: "Task1", completed: false },
    { title: "Task2", completed: false },
  ]);


  const DeleteHandler = (i) => {
    const copyTasks = [...tasks];

    let isValid = false;
    if (!copyTasks[i].completed) {
        isValid = confirm("Do you really Want to delete this Task ?");
    }

    if (isValid || copyTasks[i].completed) {
        copyTasks.splice(i, 1);
        setTasks(copyTasks);
    }
    // settasks(tasks.filter((task,index) => index !== i))
};

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { title, completed: false };
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
    setTitle("");
  };

  const CompleteTaskToggle = (index) => {
    console.log(index);
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);
  };

  let taskRender = <h1 className="absolute text-white bg-blue-300 px-4 py-2 rounded-md text-2xl left-40 top-36 mt-12">No task present</h1>;
  if (tasks.length > 0) {
    taskRender = tasks.map((task, index) => (
      <li className="flex items-center justify-between bg-gray-800 p-4 rounded-md mb-2" key={index}>
        <div className="flex items-center">
          <div
            onClick={() => CompleteTaskToggle(index)}
            className={`${task.completed ? "bg-green-500" : "border"} h-8 w-8 rounded-full border-orange-600 mr-1`}
          />
          <h1 className={`${task.completed && "line-through"} text-2xl font-extrabold text-yellow-100`}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 text-2xl text-yellow-100">
          <i className="ri-file-edit-line"></i>
          <i className="ri-delete-bin-3-line"></i>
          <i
                            onClick={() => DeleteHandler(index)}
                            className="ri-delete-bin-3-line"
                        ></i>
        </div>
      </li>
    ));
  }

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center">
      <div className="w-1/4 h-32 bg-red-300 mb-3 border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-100">
          <h1 className="text-3xl font-bold">LETS TODO</h1>
          <p>Keeps doing things</p>
        </div>
        <div className="text-3xl font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-orange-600">
          {tasks.filter((t) => t.completed === true).length}/{tasks.length}
        </div>
      </div>
      <div className="relative w-2/4 h-3/4 bg-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center  p-6">
        <h1 className='text-5xl text-black px-4 py-2 bg-sky-600  absolute top-0 mt-10' >TASK ATLAS</h1>
        <form onSubmit={submitHandler} className='flex space-x-2'>
          <input className="text-gray-900 rounded-md p-2 bg-gray-100 absolute top-24 mt-4 left-40" type="text" placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value={title} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 absolute top-28 left-50">ADD</button>
        </form>
        <ul className="list-none w-2/4 mt-10 ">
          {taskRender}
        </ul>
      </div>
    </div>
  );
};

export default App;
