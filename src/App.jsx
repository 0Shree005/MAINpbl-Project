import Navbar from "./Navbar"
import "./styles.css"
import './App.css'
import Home from "./pages/home";
import Library from "./pages/library";


function App() {
  let component
  switch(window.location.pathname){
    
    case "/vite-deploy-demo/home":
      component = <Home/>
      
      break

    case "/vite-deploy-demo/library":
      component = <Library />
      break    
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  )
}

export default App
