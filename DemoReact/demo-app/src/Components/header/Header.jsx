import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header