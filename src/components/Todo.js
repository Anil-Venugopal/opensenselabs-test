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
        <button onClick={() => completeTask(index)}>Completed</button>
      ) : (
        <button onClick={() => completeTask(index)}>Complete</button>
      )}
    </div>
  );
};

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "This is a demo task",
      completed: false,
      removed: false,
    },
    {
      title: "Write Some Code",
      completed: false,
    },
    {
      title: "Watch a TV Series",
      completed: false,
      removed: false,
    },
  ]);
  const [tasksPending, setTasksPending] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksRemoved, setTasksRemoved] = useState(0);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false, removed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  useEffect(() => {
    setTasksPending(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  useEffect(() => {
    setTasksCompleted(tasks.filter((task) => task.completed).length);
  }, [tasks]);

  useEffect(() => {
    setTasksRemoved(tasks.filter((task) => task.removed).length);
  }, [tasks]);

  return (
    <div className="todo-container">
      <div className="header">TODAY'S-TASKS</div>
      <div className="button-flex">
        <div className="button task-count">Pending tasks ({tasksPending})</div>
        <div className="button task-count">Completed tasks ({tasksCompleted})</div>
        <div className="button task-count">In progress tasks ({tasksRemoved})</div>
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
