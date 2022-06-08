import { useState, useEffect } from "react"
import axios from 'axios';
export const useCart = () => {
    let localcart = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(localcart);

    const handleAddCart = (item) => {

        let validacion = cart.filter(item => item.id_producto === item.id_producto)

        if (validacion.length===0)
        {


            console.log("agregando al cart")
            item.Cantidad=1
            setCart([...cart, item]);
            console.log(cart)
            localStorage.setItem("cart",JSON.stringify(cart))



        }else {

            console.log("no se agrego el cart ")
        }




    }
    useEffect(() => {



    });
    return {cart,handleAddCart}
}