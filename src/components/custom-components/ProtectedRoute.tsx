import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom'

type props = {
    children: React.ReactNode
}

const ProtectedRoute = ({children}: props) => {
    const { user } = useAuth();

    if(!user) {
        return <Navigate to="/login" replace />
    }

  return (
    <div>
        { children }
    </div>
  )
}

export default ProtectedRoute