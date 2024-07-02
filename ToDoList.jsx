import React, { useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat BreakFast","Take a Shower","Walk a Dog"]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }
    function addTask(){
        if(newTasks.trim() != ""){
            setTasks(t => [...t,newTasks]);
            setNewTasks("")
        }
        
    }
    function deleteTask(index){
        const updatedTask  = tasks.filter((element,i) => i != index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index > 0 ){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1 ){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    return(
    <div className="to-do-list">
    <h2>Welcome</h2>
    <h2>TO Do List</h2>
    <input type="text"
           placeholder="Enter a Task.."
           value={newTasks}
           onChange={handleInputChange} />
    <button  className="add-button"
             onClick={addTask}>Add</button>
    <ol>
        {tasks.map((tasks,index) =>
        <li key={index}>
            <span className="text">
                {tasks}
                <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>
                    UP
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                    DOWN
                </button>
            </span>
        </li>)}
    </ol>
    </div>
    );
}

export default ToDoList


 
