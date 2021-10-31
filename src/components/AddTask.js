import React, { useState } from 'react';
import './app.css';

//component for creating a new task
 const AddTask=(props) =>{
     const {addTask}=props;
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        
        addTask(value);
        setValue("");
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}


export default AddTask;