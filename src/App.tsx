import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/custom-components/Layout"
import Courses from "./pages/Courses"
import NotFound from "./components/custom-components/NotFound"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ProtectedRoute from "./components/custom-components/ProtectedRoute"
import Logout from "./pages/Logout"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
        <Route path="/logout" element={<Logout />} />
        <Route index element={<Home />} />
        <Route path="/courses" element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App