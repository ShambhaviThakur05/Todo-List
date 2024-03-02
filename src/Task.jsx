import "./Task.css";

function Task(props){
    
    const deleteTask=(key) =>{
        const newList=props.taskList.filter(taskobj => {
           return taskobj.key!==key;
        });
        props.settaskList(newList);
    };

    return (
        <div>
            {props.taskList.map(taskobj => {
                return (
                    <div key={taskobj.key} className='tasks'>
                        <p>{taskobj.task}</p>
                        <button onClick={() => deleteTask(taskobj.key)}>x</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Task;