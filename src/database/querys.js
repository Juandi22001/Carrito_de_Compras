export const querys = {
  getAllProducts: "exec ObtenerProductos;  ",
  getProducById: "exec ObteneProductoId @Id",
  getProducByNombre: "exec ObteneProductoNombre @Nombre",
  getProducByCategoria: "exec ObteneProductoCategoria @Categoria",
  getProducByPrecioMayor: "exec ObteneProductoPrecioMayor @Precio",
  getProducByPrecioMenor: "exec ObteneProductoPrecioMenor @Precio",
  AgregarProducto:
    "exec InsertarProducto @Nombre,@Precio,@Cantidad,@Ubicacion,@Categoria,@Descripcion,@URL",
  EliminarProducto: "exec BorrarProducto_porid @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  Editar:
    "exec EditarProductoId  @id_producto, @Nombre,@Precio,@Cantidad,@Ubicacion,@Categoria,@Descripcion ",
};
