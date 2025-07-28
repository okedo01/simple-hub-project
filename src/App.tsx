import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./pages/CourseLists"
import NotFound from "./components/custom-components/NotFound"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ProtectedRoute from "./components/custom-components/ProtectedRoute"
import Logout from "./pages/Logout"
import Register from "./pages/Register"
import AdminDashboard from "./components/custom-components/AdminDashboard"
import Layout from "./components/custom-components/LayoutDashboard"
import Home from "./pages/HomePg"
import { useAuth } from "./context/AuthProvider" 

function App() {
  const { user } = useAuth(); 

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              user ? <Home /> : <Navigate to="/login" replace />
            }
          />

          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path="/courses/:id" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
