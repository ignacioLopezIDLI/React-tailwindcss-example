import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-4 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb">Añade tu Oferta Laboral</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe tu Tarea"
          value={title}
          autoFocus
          className="bg-slate-200 p-2 w-full mb-2 rounded-md mt-4"
        ></input>
        <textarea
          placeholder="Escribe la Descripcion ..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-200 p-2 w-full mb-2 rounded-md"
        ></textarea>
        <button className=" bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-700">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
