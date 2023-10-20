import React from "react"
import { useContext } from "react"
import { TaskContext } from "../Context/TaskContext";

function TaskCard({task}) {

 const {deleteTask} = useContext(TaskContext)  
  function mostrarAlerta(){
    alert(task.id)
  }

  return (
    <div className="bg-gray-800 text-white p-3 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title} </h1>
      <p className="text-gray-400 text-s mt-5 capitalize" >{task.description}</p>
      <div className="mt-4">
        <button className="bg-red-600 px-2 py-1 mg rounded-md hover:bg-red-400 " onClick={()=>deleteTask(task.id)}>
          Eliminar Oferta 💥
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
