import { useState } from 'react'
import ResponsiveAppBar from './components/header'
import TaskList from './components/TaskList'

function App() {

  return (
    <div>
      <ResponsiveAppBar />
       <div className="container">
          <TaskList />
       </div>
    </div>
  )
}

export default App
