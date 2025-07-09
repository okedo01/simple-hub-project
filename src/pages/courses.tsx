import React, { useEffect, useState } from 'react'
import type { Courses } from '../types/Types';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from '../components/ui/button';

const courses: React.FC = () => {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [ error, setError ] = useState<boolean>(true);

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
        setError(err.message);
      })
  })

  return (
    <div>
      {courses.map(course => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{ course.title }</CardTitle>
            <CardDescription>{ course.description }</CardDescription>
            <CardAction>{ course.experience }</CardAction>
          </CardHeader>
          <CardContent>
            <p>{ course.category }</p>
          </CardContent>
          <CardFooter>
            <p>{ course.duration }</p>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default courses