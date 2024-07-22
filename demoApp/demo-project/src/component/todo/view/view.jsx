import React from 'react'
import Filters from './filter'
import Todo from './todo'
import TodoList from './todolist'

export default function View() {
  return (
    <div className='container-sm'>
      <Filters />
      <Todo />
      <TodoList />
    </div>
  )
}
