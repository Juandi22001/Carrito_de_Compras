import { useState, useEffect } from "react"
import axios from 'axios';
export const useCart = () => {
    let localcart = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(localcart);
    const Borrar = (producto) => {
    
        let arregloFiltrado = cart.filter(item => item.Nombre !== producto.Nombre);
        setCart(arregloFiltrado)
      
        localStorage.removeItem('cart')
        localStorage.setItem("cart",JSON.stringify(arregloFiltrado))
        
      
      }
      const EliminarCarro = (producto) => {
    
        setCart([])
      
        localStorage.removeItem('cart')
        localStorage.setItem("cart",JSON.stringify([]))
        
      
      }
    const handleAddCart = (item) => {

        let validacion = cart.filter((producto) => producto.id_producto === item.id_producto)

        if (validacion.length===0)
        {


            console.log("agregando al cart")
            item.Cantidad=1
            setCart([...cart, item]);
          
            localStorage.setItem("cart",JSON.stringify(cart))



        }else {

            console.log("no se agrego el cart ")
               
            localStorage.setItem("cart",JSON.stringify(cart))
        }




    }
    
    useEffect(() => {



    });
    return {cart,handleAddCart,Borrar,EliminarCarro}
}