import  { useState } from "react";
import Header from "./Components/Header";
import Create from "./Components/Create";
import Show from "./Components/Show";

const App = () => {
    const [tasks, settasks] = useState([]);

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header tasks={tasks} settasks={settasks} /> {/* Pass settasks prop */}
            <Create tasks={tasks} settasks={settasks} />
            <Show tasks={tasks} settasks={settasks} />
        </div>
    );
};

export default App;
