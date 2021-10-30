import React, { useState } from 'react';
import CreateTask from './AddTask';
import './app.css';

function Task({ task }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
        </div>
    );
}
const Todo=(props)=> {
    const [tasks, setTasks] = useState([
        {
            title: "Do Your Workout",
            completed: true
        },
        {
            title: "Write Some Code",
            completed: true
        },
        {
            title: "Watch a TV Series",
            completed: false
        }
    ]);
    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    return (
        <div className="todo-container">
            <div className="header">TODAY'S-TASKS</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
        </div>
    );
}

export default Todo;