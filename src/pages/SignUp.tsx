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
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../context/AuthProvider"

const schema = z.object({
    email: z.string().email("Invalid email").trim(),
    password: z.string().min(7, "Password must be at least 7 characters"),
});

type formFields = z.infer<typeof schema>;

const SignUp: React.FC = () => {

    const { Signup } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<formFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<formFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          
            Signup(data.email, data.password);
            reset();
        } catch (error) {
            setError("root", {
                type: "manual",
                message: "This email is already taken"
            })
        }
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
                                <Label htmlFor="email">Name</Label>
                                <Input {...register("name")} id="name" type="name" placeholder="Okedo" />
                            </div>
                            {errors.name && (
                                <p className="text-red-800 text-sm">{`${errors.name.message}`}</p>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input {...register("email")} id="email" type="email" placeholder="m@example.com" />
                            </div>
                            {errors.email && (
                                <p className="text-red-800 text-sm">{`${errors.email.message}`}</p>
                            )}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input  {...register("password")} id="password" type="password" />
                            </div>
                            {errors.password && (
                                <p className="text-red-800 text-sm">{`${errors.password.message}`}</p>
                            )}
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" disabled={isSubmitting} className="w-full disabled:bg-gray-800">
                                    {isSubmitting ? "Signing up" : "Sign up"}
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