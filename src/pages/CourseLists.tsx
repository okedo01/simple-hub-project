import React, { useEffect, useState } from 'react'
import type { Courses } from '../lib/Types';
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
import { Link } from 'react-router-dom';

const courses: React.FC = () => {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    fetch("./public/data/data.json")
      .then(resource => {
        if(!resource.ok) {
          throw new Error("Failed to fetch");
        }
        return resource.json();
      })
      .then((courses: Courses[]) => {
        setCourses(courses);
        console.log(courses)
      })
      .catch(err => {
        setError(err.message);
      })
  }, [])

  if(error) return <p>Failed</p>

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 m-5">
      {courses.map(course => (
        <Card key={course.id} className="">
          <CardHeader>
            <CardTitle>{ course.title }</CardTitle>
            <CardDescription>{ course.description }</CardDescription>
            <CardAction>{ course.experience }</CardAction>
          </CardHeader>
          <CardContent>
            <p>{ course.category }</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>{ course.duration }</p>
            <Link to={`/courses/${course.id}`}>
            <Button>Register</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default courses