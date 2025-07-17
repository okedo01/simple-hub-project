import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/custom-components/Layout"
import Courses from "./pages/Courses"
import NotFound from "./components/custom-components/NotFound"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ProtectedRoute from "./components/custom-components/ProtectedRoute"
import Logout from "./pages/Logout"
import Register from "./pages/Register"
import AdminDashboard from "./components/custom-components/AdminDashboard"

function App() {
  return (
    <div className="">
      <Routes>
        {/* {Private Routes} */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* {Public Routes} */}
        <Route path="/" element={<Layout />}>
          <Route path="/logout" element={<Logout />} />
          <Route index element={<Home />} />
          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path="/courses/:id" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

