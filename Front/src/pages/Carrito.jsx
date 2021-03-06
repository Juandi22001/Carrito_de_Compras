import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { useProducto } from "../hooks/useProductos";
export const Carrito = () => {
  const { productos, CargandoProductos } = useProducto();
  const [valor, setvalor] = useState([])
  const { cart, Borrar, EliminarCarro } = useCart()
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

  const Aumentar = (productoSeleccionado) => {


    console.log(productoSeleccionado)
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];

      if (element.Nombre === productoSeleccionado.Nombre) {
        for (let index2 = 0; index2 < productos.length; index2++) {
          if (element.Nombre === productos[index2].Nombre)
            cart[index].Precio = cart[index].Precio +productos[index2].Precio
          localStorage.removeItem('cart')
          localStorage.setItem("cart", JSON.stringify(cart))
          SUMA()


        }


      }
    }

  }


  return (
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4 mx-auto">

          <article >
            <table id="customers">
              <tr>
                <th>#</th>
                <th>Nombre Producto</th>
                <th> PRECIO $$  </th>
                <th> Categoria  </th>
                <th> Acciones </th>

              </tr>
              {
                cart.length > 0 &&

                (
                  cart.map((item, i) => (

                    <>


                      <tr>
                        <td>{i}</td>
                        <td>{item.Nombre}</td>

                        <td>{item.Precio}</td>

                        <td>{item.Categoria}</td>

                        <td>
                          <button class="button" onClick={() => Borrar(item)} >Borrar </button>
                          <button class="button" onClick={() => Aumentar(item)}  >+1 </button>
                        </td>



                      </tr>
















                    </>
                  ))

                )
              }

            </table>
          </article>

        </div>

        <h2>TOTAL</h2>
        <h1>${valor}</h1>
        <button class="button" onClick={() => EliminarCarro()}  >Borrar Productos </button>


      </div>
    </div>

  )
}