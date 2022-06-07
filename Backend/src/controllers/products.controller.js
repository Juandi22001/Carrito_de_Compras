import { getConnection, querys, sql } from "../database";

export const Getproductos = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    console.log("aca")
    res.status(500);
    res.send(error.message);
  }
};

export const CrearProducto = async (req, res) => {
  console.log(req.body)
  const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
  let { quantity } = req.body;

  // validating
  if (Descripcion == null || Nombre == null) {
    return res.status(400).json({ msg: "no se puedo realizar la peticion" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("Nombre", sql.VarChar, Nombre)
      .input("Precio", sql.Int, Precio)
      .input("Cantidad", sql.Int, Cantidad)
      .input("Ubicacion", sql.VarChar, Ubicacion)
      .input("Categoria", sql.VarChar, Categoria)
      .input("Descripcion", sql.VarChar, Descripcion)
      .input("URL", sql.VarChar, URL)
      .query(querys.AgregarProducto);

    res.json({ Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const ObtenerProductoID = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const ObtenerProductoPrecioMayor = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Precio", req.params.Precio)
      .query(querys.getProducByPrecioMayor);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const ObtenerProductoPrecioMenor = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Precio", req.params.Precio)
      .query(querys.ObtenerProductoPrecioMenor);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};





export const ObtenerProductoNombre = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Nombre", req.params.Nombre)
      .query(querys.getProducByNombre);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const ObtenerProductoCategoria= async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Categoria", req.params.Categoria)
      .query(querys.getProducByCategoria);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const Eliminar = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.EliminarProducto);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};



export const Editar = async (req, res) => {
  const { id_producto,Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion } = req.body;

  // validating
  if (Descripcion == null || Nombre == null) {
    return res.status(400).json({ msg: "no se puedo realizar la peticion" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_producto", sql.Int, id_producto)
      .input("Nombre", sql.VarChar, Nombre)
      .input("Precio", sql.Int, Precio)
      .input("Cantidad", sql.Int, Cantidad)
      .input("Ubicacion", sql.VarChar, Ubicacion)
      .input("Categoria", sql.VarChar, Categoria)
      .input("Descripcion", sql.VarChar, Descripcion)
      .query(querys.Editar);

      res.json({ Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
