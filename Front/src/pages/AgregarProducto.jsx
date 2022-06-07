
import { useForm } from "../hooks/useForm";


import { useProducto } from "../hooks/useProductos";

export const AgregarProductos = () => {
    const  {CrearProducto } = useProducto();




    const { values, handleInputChange, reset } = useForm({

        Nombre: '',
        Precio: 0,
        Cantidad: 0,

        Ubicacion: '',


        Categoria: '',


        Descripcion: '',


        URL: '',






    });
    const handleSubmitProducto = (e) => {

        e.preventDefault()
        CrearProducto(values.Nombre,values.Precio,values.Cantidad,values.Ubicacion,values.Categoria,values.URL,values.Descripcion)
    }

    return (
        <div class="container p-4">
            <div class="row">
                <header>Agregar Productos</header>

                <form id="form" class="topBefore" onSubmit={handleSubmitProducto}>
                    <button >Crear </button>
                    <input id="Nombre" name="Nombre" value={values.Nombre} onChange={handleInputChange} type="text" placeholder="Nombre"></input>
                    <input id="Precio" name="Precio" value={values.Precio} onChange={handleInputChange} type="number" placeholder="Precio"></input>
                    <input id="Cantidad" name="Cantidad" value={values.Cantidad} onChange={handleInputChange} type="number" placeholder="Cantidad"></input>
                    <input id="Ubicacion" name="Ubicacion" value={values.Ubicacion} onChange={handleInputChange} type="text" placeholder="Ubicacion"></input>
                    <input id="Categoria" name="Categoria" value={values.Categoria} onChange={handleInputChange} type="text" placeholder="Categoria"></input>
                    <input id="URL" name="URL" type="text" value={values.URL} onChange={handleInputChange} placeholder="URL"></input>
                    <input id="Descripcion" name="Descripcion" value={values.Descripcion} onChange={handleInputChange} type="text" placeholder="Descripcion"></input>

                </form>
            </div>
        </div>
    )
}