import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";
import { task as data } from "./data/task";
import { useState, useEffect } from "react";

function App() {            
  return (
    <main className="bg-sky-950 max-h-screenn">
        <div className="container mx-auto p-7">
          <TaskForm />
          <Tasklist />
        </div>
    </main>
  );
}

export default App;
