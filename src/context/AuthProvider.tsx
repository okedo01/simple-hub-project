import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type AuthContextType = {
  user: string | null
  Login: (email: string, password: string) => void
  Logout: () => void
}

type props = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthContext");
  }
  return context;
}

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  })

  const Login = (email: string, password: string) => {
    setUser(email);
    navigate("/");
    localStorage.setItem("user", email);
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setLoginError("No user found. Please sign up first.");
      return;
    }
    const parsedUser = JSON.parse(storedUser);

    if (email === parsedUser.email && password === parsedUser.password) {

      navigate("/");

    } else {
      setLoginError("Please! enter valid credentials");
    }
  }

  const Logout = () => {
    setUser(null);
    navigate("/login");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}