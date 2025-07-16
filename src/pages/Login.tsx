import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { email, z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(7),
})

type formFields = z.infer<typeof schema>;

const Login: React.FC = () => {
  const [loginError, setLoginError] = useState<string | null>("");
  const { Login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<formFields> = async (data) => {
    setLoginError("");

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setLoginError("No user found. Please sign up first.");
      return;
    }

    const parseUser = JSON.parse(storedUser);

    if (data.email === parseUser.email && data.password === parseUser.password) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      Login(data.email);

      reset();

      navigate("/");
    } else {
      setLoginError("Invalid Credentials");
    }



  }

  return (
    <div className="grid justify-items-center items-center min-h-screen">
      { loginError && (
        <p className="text-sm text-red-500">{ loginError }</p>
      )}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link to="/signup">
              <Button variant="link">Sign Up</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                  }
                  )}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm">{`${errors.email.message}`}</p>
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
                <p className="text-red-600 text-sm">{`${errors.password.message}`}</p>
              )}

              <CardFooter className="">
                <Button type="submit" disabled={isSubmitting} className="w-full disabled:bg-gray-900">
                  Login
                </Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login