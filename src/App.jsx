import Navbar from "./Navbar"
import "./styles.css"
import './App.css'
import { Home } from "./pages/home";
import Library from "./pages/library";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/vite-deploy-demo/home" element={<Home />} />
            <Route path="/vite-deploy-demo/library" element={<Library />} />
          </Routes>
      </div>
    </>
  )
}

export default App
