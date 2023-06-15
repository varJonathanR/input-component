import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-space-between p-2 navbar h-100 position-fixed">
        <div className="">
            <a href="https://devchallenges.io/" className='fs-5 d-flex align-items-center'>
                <span className='colored'>Dev</span>challenges.io
            </a>
            <ul className="nav nav-pills flex-column p-0 m-0">
                <li className="nav-item p-1">
                    <NavLink to={"/"} className="nav-link text-dark">
                        <i className="bi bi-code-slash me-2"></i>
                        <span>All</span>
                    </NavLink>
                </li>
                <li className="nav-item p-1">
                    <NavLink to={"size"} className="nav-link text-dark">
                        <i className="bi  bi-arrows-angle-expand me-2"></i>
                        <span>Size</span>
                    </NavLink>
                </li>
                <li className="nav-item p-1">
                    <NavLink to={"icon"} className="nav-link text-dark">
                        <i className="bi bi-award-fill me-2"></i>
                        <span>Icon</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="user">
            <a className='text-secondary' href="https://devchallenges.io/portfolio/varJonathanR" target="_blank" rel="noopener noreferrer">varJonathanR</a>
        </div>
    </div>
  )
}
