import React from 'react'
import {NavLink} from "react-router-dom"
import AuthModal from './AuthModal'

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-brand">o</div>
        <nav className="nav-menu">
          <ul className="nav-items">
            <li className="projects"><NavLink to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink to="/insights">Insights</NavLink></li>
            <li className="nav-item"><NavLink to="/settings">Settings</NavLink></li>
            <AuthModal />
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
