import { useProducto } from "../hooks/useProductos";

import { useForm } from "../hooks/useForm";
export const VerProductos = () => {


  const { values, handleInputChange, reset } = useForm({

    Nombre: '',
    Precio: 0,
    Cantidad: 0,

    Ubicacion: '',


    Categoria: '',


    Descripcion: '',


    URL: '',






  });

  const { productos, CargandoProductos } = useProducto();

  return (
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4 mx-auto">

          <div class="cards">

            {
              CargandoProductos ?
                (<h3> cargando productos...</h3>

                )
                :
                (
                  productos.map((item, i) => (

                    <>
                      <article class="card">
                        <header>
                          <h2>{item.Nombre}</h2>
                          <img src={item.URL} alt="Hot air balloons" />
                        </header>

                        <div class="content">
                          <h2>Precio</h2>
                          <p>  {item.Precio}</p>


                        </div>

                        <button >Agregar </button>

                      </article>




                    </>
                  ))

                )
            }



          </div>




        </div>
      </div>
    </div>

  )
}