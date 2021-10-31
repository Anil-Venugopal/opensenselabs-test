import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import "./app.css";

const Task = (props) => {
  const { task, index, completeTask, removeTask } = props;

  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button
        style={{ background: "red" }}
        onClick={() => {
          removeTask(index);
        }}
      >
        x
      </button>
      {task.completed ? (
        //Check whether task completed or in progress state before writing content
        <button onClick={() => completeTask(index)}>Completed</button>
      ) : (
        <button onClick={() => completeTask(index)}>Complete</button>
      )}
    </div>
  );
};

function Todo() {
  const [tasks, setTasks] = useState([ //function returns an array with two elements
    {
      title: "This is a demo task",
      completed: false,
      progress: false,
    },
    {
      title: "Write Some Code",
      completed: false,
      progress:false
    },
    {
      title: "Watch a TV Series",
      completed: false,
      progress: false,
    },
  ]);
  const [tasksPending, setTasksPending] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksInprogress, setTasksInProgress] = useState(0);

  //included the addTask method here
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false, progress: true }];
    setTasks(newTasks);
  };

  //included the completeTask method here
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  //included the removeTask method here
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  //To monitor the number of uncompleted tasks
  useEffect(() => {
    setTasksPending(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  //To monitor the number of completed tasks
  useEffect(() => {
    setTasksCompleted(tasks.filter((task) => task.completed).length);
  }, [tasks]);

  //To monitor the number tasks in progress
  //the task which is added new basically will be in progress and unfinished task
  useEffect(() => {
    setTasksInProgress(tasks.filter((task) => !task.completed && task.progress).length);
  }, [tasks]);

  return (
    <div className="todo-container">
      <div className="header">TODAY'S-TASKS</div>
      <div className="button-flex">
        <div className="button task-count">Pending tasks ({tasksPending})</div>
        <div className="button task-count">Completed tasks ({tasksCompleted})</div>
        <div className="button task-count">In progress tasks ({tasksInprogress})</div>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <AddTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
