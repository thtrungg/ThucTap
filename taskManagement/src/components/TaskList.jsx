import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "../style/taskList.scss";
import { useSelector } from 'react-redux'
import {makeSelectTodoList } from '../redux/reselect'

import Button from "@mui/material/Button";

import TaskForm from "./TaskForm";

function TaskList() {
  const [hided, setHided] = useState(true);

  const todoList = useSelector(makeSelectTodoList);

  const hidedTaskForm = () => {
    setHided(!hided);
  };

  return (
    <div >
      <div className="taskList">
        <div className="listInfo">
          <p>PENDING: 0 </p>
          <p>COMPLETED: 10 </p>
          <Button variant="text" onClick={hidedTaskForm}>
            ADD
          </Button>
        </div>
        <div className="listItem">
          {todoList.map((todo) =>
            <TaskItem key={todo.id} taskname={todo.taskname} suggest={todo.suggest} description={todo.description} rangePicker={todo.rangepicker}  />
          )}
        </div>
      </div>

      <div className="listForm">
        {!hided && <TaskForm onClose={hidedTaskForm} />}
      </div>
    </div>
  );
}

export default TaskList;
