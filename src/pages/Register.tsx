import React from 'react'
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
import { Link } from 'react-router-dom';

type formData = {
    name: string
    email: string
    password: string
}

const Register: React.FC = () => {
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

    return (
        <div className="grid justify-items-center items-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Register for: </CardTitle>
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