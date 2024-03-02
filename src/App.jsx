import './App.css';
import Task from './Task';
import { useState } from "react";

function App() {
    const[currtask,setcurrtask]=useState("");
    const[taskList,settaskList]=useState([]);

     const onChangeHandler=(e)=>{
            console.log("curr value is ",e.target.value);
            setcurrtask(e.target.value);
     };

     const addTask=()=>{
        settaskList([...taskList,{task:currtask,key:Date.now()}]);
        setcurrtask("");
     };

  return (
    <>
       <div className='Main_div'>
          <div>
            <h1>TODO LIST</h1>
          </div>
        
          <div className='task-box'>
            <div className='inputField'>
               <input type="text" placeholder='Add item' value={currtask} onChange={onChangeHandler}/>
               <button onClick={addTask}>+</button>  
            </div> 
            <Task taskList={taskList} settaskList={settaskList}/>           
          </div>
          
       </div>  
    </>
  )
}

export default App