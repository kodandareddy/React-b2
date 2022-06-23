import React from 'react'
import {
    useParams
  } from "react-router-dom"
const MyCourseId = () => {
   const{courseId}=useParams()
  return (
    <div>
        {courseId}
    </div>
  )
}

export default MyCourseId

// https://www.youtube.com/watch?v=0cSVuySEB0A
// https://reactrouter.com/docs/en/v6/hooks/use-in-router-context