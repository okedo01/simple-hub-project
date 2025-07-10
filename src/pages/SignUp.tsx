import React from 'react'
import { Button } from "../components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Link } from 'react-router-dom'
import { useForm, type FieldValues } from 'react-hook-form'

const SignUp: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    }

    return (
        <div className="grid justify-items-center items-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle>Create your account</CardTitle>
                    <CardAction>
                        <Link to="/login">
                            <Button variant="link">Log in</Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                { ...register("email", {
                                    required: "Email is required"
                                })}
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                />
                            </div>
                            { errors.email && (
                                <p className="text-red-800 text-sm">{`${errors.email.message}`}</p>
                            )}
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
                                id="password" type="password" required />
                            </div>
                            { errors.password && (
                                <p className="text-red-800 text-sm">{`${errors.password.message}`}</p>
                            )}
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" disabled={isSubmitting} className="w-full disabled:bg-gray-800">
                                    Sign up
                                </Button>
                            </CardFooter>
                        </div>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}

export default SignUp