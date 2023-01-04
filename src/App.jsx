import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Project from "./pages/project"
import Contact from "./pages/contact"
import Navbar from "./component/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <div className="relative pt-16 w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </>
  )
}

export default App