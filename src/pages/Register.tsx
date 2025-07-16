import React, { useEffect, useState } from 'react'
import type { Courses, Students } from '../lib/Types';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { useForm, type SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { getItem, setItem } from '../lib/localStorage';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8),
});

type formFields = z.infer<typeof schema>;

const Register: React.FC = () => {
    const [courses, setCourses] = useState<Courses | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const { id } = useParams();
    const courseID = Number(id);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<formFields>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<formFields> = async (data: formFields) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const student = {
                ...data,
                courseID: courseID,
                courseTitle: courses?.title,
                progress: Math.floor((Math.random() * 100)) + 1,
            }
            const storedStudent = getItem<typeof student[]>("students") ?? [];
            setItem("students", [...storedStudent, student])

            Swal.fire({
                title: '🎉 Registration Successful!',
                text: `You are now enrolled in "${courses?.title}"`,
                icon: 'success',
                confirmButtonText: 'Go Back Home',
                showCancelButton: true,
                cancelButtonText: 'Start Exercises',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigate(`/courses/${courseID}`);
                }
            });
            reset();
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            })
        }
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
                    setErrorMsg("Course not found");
                } else {
                    setCourses(foundCourse);
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
            })
    }, [courseID])


    if (errorMsg) return <p className="text-red-500 text-center mt-4">{errorMsg}</p>;
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
                                <Input {...register("name")} type="text" placeholder="Enter your name" />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input {...register("email")} id="email" type="email" placeholder="m@example.com" />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input {...register("password")} id="password" type="password" />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                            <CardFooter className="">
                                <Button type="submit" disabled={isSubmitting} className="w-full disabled:bg-gray-900">
                                    {isSubmitting ? "Registering" : "Register"}
                                </Button>
                            </CardFooter>
                            {errors.root && <div className="text-red-500">{errors.root.message}</div>}
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