import React from 'react'
import {
    NavLink,
    Outlet
  } from "react-router-dom"
const MyCourses = () => {
  return (
    <div>
        <h1>Course List</h1>
        <NavLink to="details">
           React
        </NavLink>
        <NavLink to="/myCourses/details/1233">
           React
        </NavLink>
        <Outlet/>
       
    </div>
  )
}

export default MyCourses