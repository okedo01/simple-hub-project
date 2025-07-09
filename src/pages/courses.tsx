import React, { useState } from 'react'
import type { Courses } from '../types/Types';

const courses: React.FC = () => {
  const [ courses, setCourses ] = useState<Courses[]>([]);
  return (
    <div>courses</div>
  )
}

export default courses