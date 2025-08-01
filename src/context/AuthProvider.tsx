import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type AuthContextType = {
  user: string | null
  Login: (email: string, password: string) => void
  Logout: () => void
  Signup: (name: string, email: string, password: string) => void
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
  const navigate = useNavigate();

  const [ user, setUser ] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if(storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser.name);
    }
  }, [])

  const Signup = (name: string, email: string, password: string) => {
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(name);
    navigate("/login");
  }

  const Login = (email: string, password: string) => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(email);
    navigate("/");
  }

  const Logout = () => {
    navigate("/login");
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, Login, Logout, Signup }}>
      {children}
    </AuthContext.Provider>
  )
}