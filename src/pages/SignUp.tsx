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

const SignUp: React.FC = () => {
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
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" className="w-full">
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