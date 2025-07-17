// import React from 'react'
// import { useAuth } from '../../context/AuthProvider'
// import { Navigate } from 'react-router-dom'

// type props = {
//     children: React.ReactNode
// }

// const ProtectedRoute = ({children}: props) => {
//     const { user } = useAuth();

//     if(!user) {
//         return <Navigate to="/login" replace />
//     }

//   return (
//     <div>
//         { children }
//     </div>
//   )
// }

// export default ProtectedRoute



// src/components/custom-components/ProtectedRoute.tsx

import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute;
