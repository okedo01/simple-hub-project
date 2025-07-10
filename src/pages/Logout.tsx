import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider';

const Logout: React.FC = () => {
    const { Logout } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        Logout();
        navigate("/login")
    })

    return (
        <div>
            Loggin out...
        </div>
    )
}

export default Logout