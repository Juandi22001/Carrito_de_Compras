import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
export const Carrito = () => {

  const [valor, setvalor] = useState([])
  const { cart,Borrar } = useCart()
  useEffect(() => {

    SUMA()

  })
  const { values, handleInputChange, reset } = useForm({
    Total: 0, suma: 0







  });

  const SUMA = () => {
    let suma = []
    let val = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];

      suma.push(element.Precio)

    }
    console.log(suma)
    for (let index = 0; index < suma.length; index++) {


      val = suma[index] + val
    }

    setvalor(val)


  }

  const Aumentar = (producto) => {


    console.log(producto)
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];

      if(element.Nombre===producto.Nombre){
        cart[index].Precio= cart[index].Precio*2
        localStorage.removeItem('cart')
        localStorage.setItem("cart",JSON.stringify(cart))
        SUMA()
      }
    }
    
  }


  return (
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4 mx-auto">

          <div class="cards">

            {
              cart.length > 0 &&

              (
                cart.map((item, i) => (

                  <>
                    <article class="card">
                      <header>
                        <h2>{item.Nombre}</h2>
                        <button onClick={() => Borrar(item)} >Borrar </button>
                        <button onClick={() => Aumentar(item)}  >+1 </button>
                      </header>

                      <div class="content">
                        <h2>Precio</h2>
                        <p>  {item.Precio}</p>
                        

                      </div>



                    </article>




                  </>
                ))

              )
            }

          

          </div>

          <h2>TOTAL</h2>
            <h1>{valor}</h1>


        </div>
      </div>
    </div>
  )
}