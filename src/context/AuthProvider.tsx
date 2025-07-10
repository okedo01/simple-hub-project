import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

type AuthContextType = {
  user: string | null
  Login: (email: string) => void
  Logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({Children}: {Children: React.ReactNode}) => {
  const [ user, setUser ] = useState<string | null>(null);
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
  <AuthContext.Provider value={{user, Login, Logout}}>
    { Children }
  </AuthContext.Provider>
)
}

export const useAuth = ({Children}: {Children: React.ReactNode}) => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error("useAuth must be used inside AuthContext");
  }
  return context;
}