
import './App.css';
import { Home } from './pages/Home'
import { Routes, Route ,BrowserRouter as Router} from "react-router-dom"
import { VerProductos } from './pages/VerProductos'
import { Navbar } from './components/Navbar';
import {Carrito}from './pages/Carrito'
import {AgregarProductos}from './pages/AgregarProducto'
import {Buscar}from './pages/Buscar'
function App() {
  return (
    
    <> 
   
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VerProductos" element={<VerProductos />} />
      <Route path="/AgregarProductos" element={<AgregarProductos />} />
      <Route path="/Buscar" element={<Buscar />} />
      <Route path="/Carrito" element={<Carrito />} />
    </Routes>
    </Router>
    </>



    

  )


}

export default App;
