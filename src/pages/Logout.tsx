import { useEffect } from 'react';
import { useAuth } from '../context/AuthProvider'

const Logout: React.FC = () => {
    const { Logout } = useAuth();

    useEffect(() => {
        Logout();
    }, [Logout])

  return (
    <div>Loggin out...</div>
  )
}

export default Logout