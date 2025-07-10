import React from 'react'

type props = {
    children: React.ReactNode
}

const ProtectedRoute = ({children}: props) => {
  return (
    <div>
        { children }
    </div>
  )
}

export default ProtectedRoute