import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../Context/TaskContext"

function Tasklist() {   
const {task} = useContext(TaskContext)

if (task.length === 0 ){
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas Aun </h1>    
}
  return (
    <div className="grid grid-cols-4 gap-2 ">
        {task.map((task)=>(
          <TaskCard key={task.id} task={task}/>   
        ))}
    </div>
  )
}

export default Tasklist