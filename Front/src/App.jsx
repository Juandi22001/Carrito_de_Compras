
import './App.css';
import { Home } from './pages/Home'
import { Routes, Route ,BrowserRouter as Router} from "react-router-dom"
import { VerProductos } from './pages/VerProductos'
import { Navbar } from './components/Navbar';
import {AgregarProductos}from './pages/AgregarProducto'
function App() {
  return (
    
    <> 
   
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VerProductos" element={<VerProductos />} />
      <Route path="/AgregarProductos" element={<AgregarProductos />} />
    </Routes>
    </Router>
    </>



    

  )


}

export default App;
