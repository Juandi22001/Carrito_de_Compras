import { useState } from "react"
import axios from 'axios';
export const useProducto = () => {
    const [producto, setProducto] = useState({


    })

    const CrearProducto =async (Nombre, Precio, Cantidad, Ubicacion, Categoria, Descripcion, URL) => {
        /*
        const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
        */

        console.log(Nombre, Precio, Cantidad, Ubicacion, Categoria, Descripcion, URL)

        
        await    axios.post('http://localhost:5000/api_productos/Productos',{Nombre, Precio, Cantidad, Ubicacion, Categoria, Descripcion, URL} )
        .then(response => {
          console.log(response)
        });

    }



    return {CrearProducto }
}