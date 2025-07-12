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

const Register: React.FC = () => {
    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm();

    return (
        <div className="grid justify-items-center items-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Register for: </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                { ...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 4,
                                        message: "Name must be 4 characters"
                                    }
                                })}
                                type="text" placeholder="Enter your name"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                { ...register("email", {
                                    required: "Email is requires",
                                })}
                                id="email" type="email" placeholder="m@example.com" />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                { ...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 7,
                                        message: "Password must be 7 characters"
                                    }
                                })}
                                    id="password" type="password" />
                            </div>

                            <CardFooter className="">
                                <Button type="submit" disabled={isSubmitting} className="w-full disabled:bg-gray-900">
                                    Register
                                </Button>
                            </CardFooter>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )}

export default Register