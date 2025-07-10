import React, { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

type AuthContextType = {
  user: string | null
  Login: (email: string) => void
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
  const navigate = useNavigate();

  const Login = (email: string) => {
    setUser(email);
    navigate("/courses");
  }

  const Logout = () => {
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}