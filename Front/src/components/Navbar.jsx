import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>
            <ul> 
                
                
                 <li><Link to="/">INICIO</Link></li>
                 <li> <Link to="/VerProductos">VerProductos</Link></li>
                 <li>   <Link to="/AgregarProductos">AgregarProductos</Link></li>
                 <li>  <Link to="/Buscar">Buscar</Link></li>
                 <li> <Link to="/Carrito">Carrito</Link></li>
                
                </ul>
                </div>
    )
}