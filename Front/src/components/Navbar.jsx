import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>
            <nav>  <Link to="/">INICIO</Link>
                <Link to="/VerProductos">VerProductos</Link></nav>
                
        </div>
    )
}