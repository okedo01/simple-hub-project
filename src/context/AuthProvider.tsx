import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type AuthContextType = {
  user: string | null
  Login: (email: string) => void
  Logout: () => void
}

type props = {
  children: React.ReactNode
}

const navigate = useNavigate();

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthContext");
  }
  return context;
}

export const AuthProvider = ({ children }: props) => {

  const [ user, setUser ] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userEmail");
    if(storedUser) {
      setUser(storedUser);
    }
  })

  const Login = (email: string) => {
    navigate("/");
    setUser(email);
    localStorage.setItem("userEmail", email);
  }

  const Logout = () => {
    navigate("/login");
    setUser(null);
    localStorage.removeItem("userEmail");
  }

  return (
    <AuthContext.Provider value={{ user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}