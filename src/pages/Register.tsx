import React, { useEffect, useState } from 'react'
import type { Courses } from '../lib/Types';
import { useParams } from 'react-router-dom';

const Register: React.FC = () => {
    const [ courses, setCourses ] = useState<Courses[]>([]);
    const { id } = useParams();
    const courseID = Number(id);

    useEffect(() => {
        fetch("./src/data/data.json")
            .then(resource => {
                if(!resource.ok) {
                    throw new Error("Failed to fetch");
                }
                return resource.json();
            })
            .then((courses: Courses[]) => {
                setCourses(courses);
            })
            .catch(err => {
                console.log(err.message);
            })
    })
  return (
    <div>Register</div>
  )
}

export default Register