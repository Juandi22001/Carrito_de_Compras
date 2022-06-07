import { Router } from "express";
import {
  Getproductos,
  CrearProducto,
  ObtenerProductoID,
  ObtenerProductoNombre,
  Eliminar,

  Editar,
  ObtenerProductoCategoria,
  ObtenerProductoPrecioMayor,ObtenerProductoPrecioMenor
} from "../controllers/products.controller";

const router = Router();

router.get("/TotalProductos", Getproductos);

router.post("/Productos", CrearProducto);


router.get("/Productos/:id", ObtenerProductoID);

router.get("/ProductosNombre/:Nombre", ObtenerProductoNombre);
router.get("/ProductosCategoria/:Categoria", ObtenerProductoCategoria);
router.get("/ProductosPrecioMayor/:Precio", ObtenerProductoPrecioMayor);
router.get("/ProductosPrecioMenor/:Precio", ObtenerProductoPrecioMenor);
router.delete("/Productos/:id", Eliminar);

router.put("/Productos/:id", Editar);

export default router;
