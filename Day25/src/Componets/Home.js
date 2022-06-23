import React from 'react'
import { Button } from 'reactstrap'
import {
    useNavigate,
    Link,
    NavLink
  } from "react-router-dom"
const Home = () => {
 const navigate=useNavigate()
  return (
    <div>
        {/* <Link className='btn btn-success' to='/products'>
            My Products
        </Link> */}
       <NavLink
            to="/products"
           
          >
            products
          </NavLink>
          <NavLink
            to="/login"
           
          >
        Login
          </NavLink>
          <NavLink
            to="/myCourses"
           
          >
        Courses
          </NavLink>
    </div>
  )
}

export default Home