import { useProducto } from "../hooks/useProductos";
import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { useCart } from "../hooks/useCart";
export const Buscar = () => {

    const [ProductosFiltrados, setProductosFiltrados] = useState([])
    const{cart,handleAddCart}=useCart()




    const { values, handleInputChange, reset } = useForm({

        Nombre: '',
        Precio: 0,
        Categoria: '',
        Ubicacion: '',
        tipoBusqueda: ''







    });




    const { productos, CargandoProductos } = useProducto();

    const FiltrarNombre = (e) => {

        e.preventDefault()
        if (values.Nombre !== '') {

            let arregloFiltrado = productos.filter(item => item.Nombre === values.Nombre);

            setProductosFiltrados(arregloFiltrado)


        }


        if (values.Categoria !== '') {

            let arregloFiltrado = productos.filter(item => item.Categoria === values.Categoria);

            setProductosFiltrados(arregloFiltrado)


        }

        if (values.Precio !== '') {
            var isChecked = document.getElementById('check').checked;
            var isChecked2 = document.getElementById('check2').checked;

            if (isChecked) {
                
                let arregloFiltrado = productos.filter(item => item.Precio <= values.Precio);
                

                setProductosFiltrados(arregloFiltrado)
            }
            if (isChecked2) {
               
                let arregloFiltrado = productos.filter(item => item.Precio >= values.Precio);

                setProductosFiltrados(arregloFiltrado)
            }


        }



    }
    return (


        <div >
<form id="form" class="topBefore" onSubmit={FiltrarNombre}>
            <input id="Nombre" name="Nombre" value={values.Nombre} onChange={handleInputChange} type="text" placeholder="Nombre"/>

            <input id="Categoria" name="Categoria" value={values.Categoria} onChange={handleInputChange} type="text" placeholder="Categoria"/>
            <input id="Precio" name="Precio" value={values.Precio} onChange={handleInputChange} type="number" placeholder="Preciooooooooooo"/>


            <input type="checkbox" id="check" />
            <label for="cbox2">Mayor</label>
            <input type="checkbox" id="check2" />
            <label for="cbox2">Menor</label>

            <button  >Buscar </button>
            </form>
            {
                ProductosFiltrados.length > 0 &&
                (
                    ProductosFiltrados.map((item, i) => (


                        <>
                            <div class="cards" key={i+1}>
                                <article class="card">
                                    <header>
                                        <h2>{item.Nombre}</h2>
                                        <img src={item.URL} alt="Hot air balloons" />
                                    </header>

                                    <div class="content">
                                        <h2>Precio</h2>
                                        <p>  {item.Precio}</p>


                                    </div>

                               
                                    

                                    <button onClick={handleAddCart(item)}>Agregar </button>
                                </article>


                            </div>
                         



                        </>
                        


                    ))


                )
            } 
            

        </div>




    )
}