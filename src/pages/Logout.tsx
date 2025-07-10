import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout: React.FC = () => {
    const { Logout } = useAuth();

  return (
    <div>Logout</div>
  )
}

export default Logout