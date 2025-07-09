import React from 'react'
import { Link } from 'react-router-dom'

const navbar: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
    </div>
  )
}

export default navbar