import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/custom-components/Layout"
import Courses from "./pages/Courses"
import NotFound from "./components/custom-components/NotFound"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App