import React from 'react'
import HeaderBar from './Header'
import { Outlet } from 'react-router-dom'

function MainPage() {
  return (
    <div>
        <div className="header">
            <HeaderBar />
        </div>
        <div className="maincontent">
            <Outlet />
        </div>
    </div>
  )
}

export default MainPage