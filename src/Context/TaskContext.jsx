// importo
import { createContext, useState, useEffect } from "react"
import {task as data} from "../data/task"

// Creo funcion Contexto que almacena los Datos 
export const TaskContext = createContext()

// Componente Provider que engloba los componentes 
export function TaskContextProvider(props) {
  const [task, setTask] = useState([])

  function createTask(newTask) {
    // setlastId(lastId + 1 )

    setTask([...task, {
        title: newTask.title,
        id: task.length + 1,      
        description: newTask.description,
      }]);
  }

  function deleteTask(taskId) {
    setTask(task.filter(task => task.id !==taskId))

  }

    // Espera que carge el elemento Contexto  para despues pasar la DATA (Tareas)
    useEffect(() => {
      setTask(data);
    },[])


  return (
    <TaskContext.Provider value={{
      task,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

