import React, { useEffect, useState } from 'react'
import type { Courses } from '../lib/Types';
import { Link, useParams } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useForm } from 'react-hook-form';

type formData = {
    name: string
    email: string
    password: string
}

const Register: React.FC = () => {
    const [courses, setCourses] = useState<Courses | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();
    const courseID = Number(id);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<formData>();

    const onSubmit = async (data: formData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    }

    useEffect(() => {
        if (!courseID) return;
        fetch("../src/data/data.json")
            .then(resource => {
                if (!resource.ok) {
                    throw new Error("Failed to fetch");
                }
                return resource.json();
            })
            .then((courses: Courses[]) => {
                const foundCourse = courses.find(course => course.id === courseID);
                if (!foundCourse) {
                    setError("Course not found");
                } else {
                    setCourses(foundCourse);
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [courseID])

    if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
    if (!courses) return <p className="text-center mt-6">Loading course details...</p>;

    return (
        <div className="grid justify-items-center items-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Register for: {courses?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                            value: 4,
                                            message: "Name must be 4 characters"
                                        }
                                    })}
                                    type="text" placeholder="Enter your name" />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    {...register("email", {
                                        required: "Email is requires",
                                    })}
                                    id="email" type="email" placeholder="m@example.com" />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 7,
                                            message: "Password must be 7 characters"
                                        }
                                    })}
                                    id="password" type="password" />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                            <CardFooter className="">
                                <Button type="submit" disabled={isSubmitting} className="w-full disabled:bg-gray-900">
                                    Register
                                </Button>
                            </CardFooter>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <Link to="/">
                <Button>Go Back Home</Button>
            </Link>
        </div>
    )
}

export default Register