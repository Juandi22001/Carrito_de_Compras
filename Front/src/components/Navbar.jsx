import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>
            <nav>  <Link to="/">INICIO</Link>
                <Link to="/VerProductos">VerProductos</Link>
                <Link to="/AgregarProductos">AgregarProductos</Link>
                <Link to="/Buscar">Buscar</Link>
                <Link to="/Carrito">Carrito</Link>
                </nav>
        </div>
    )
}