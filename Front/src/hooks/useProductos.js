import { useState, useEffect } from "react"
import axios from 'axios';
export const useProducto = () => {
  const [productos, setProductos] = useState([])
  const [CargandoProductos, setCargandoProductos] = useState(true)


  const [productoNombre, setProductoNombre] = useState([])
  const [CargandoProductoNombre, setCargandoProductoNombre] = useState(true)
  const CrearProducto = async (Nombre, Precio, Cantidad, Ubicacion, Categoria, Descripcion, URL) => {
    /*
    const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
    */

    console.log(Nombre, Precio, Cantidad, Ubicacion, Categoria, Descripcion, URL)


    await axios.post('http://localhost:5000/api_productos/Productos', { Nombre, Precio, Cantidad, Ubicacion, Categoria, Descripcion, URL })
      .then(response => {
        console.log(response)
      });

  }
  const GetProductos = async () => {
    /*
    const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
    */




    await axios.get('http://localhost:5000/api_productos/TotalProductos')
      .then(response => {
        console.log(response.data)
        setProductos(response.data)
        setCargandoProductos(false)


      }).catch(error => {
        console.log(error)
      })

      ;

  }


  const GetProductoNombre = async (nombre) => {
    /*
    const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
    */




    await axios.get('http://localhost:5000/api_productos/ProductosNombre/'+nombre)
      .then(response => {
        console.log(response.data)
        setProductoNombre(response.data)
        setCargandoProductoNombre(false)


      }).catch(error => {
        console.log(error)
      })

      ;

  }


  useEffect(() => {

    GetProductos()

  }, [CargandoProductos]);
  return { CrearProducto, productos, CargandoProductos }
}