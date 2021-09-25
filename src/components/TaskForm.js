import React from "react";
import { useState } from "react";

const TaskForm = ({ onAdd }) =>{
    const[text,setText] = useState("");
    const[day,setDay] = useState("");
    const[reminder,setReminder] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please add Task")
            return
        }
        onAdd({ text,day,reminder });

    }
    return(
    <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Add day & time" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
    );
}
export default TaskForm