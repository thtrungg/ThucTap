import React from 'react'
import TaskItem from './TaskItem'
import '../style/taskList.scss'

function TaskList() {
  return (
    <div>
        <div className="listInfo">
            <p>Pending: 0 </p>
            <p>Completed: 10 </p>
        </div>
        <div className="listItem">
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />

        </div>
    </div>
  )
}

export default TaskList