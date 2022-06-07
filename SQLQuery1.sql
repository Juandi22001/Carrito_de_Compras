create table Producto (
id_producto INT PRIMARY KEY IDENTITY (1, 1),
	Nombre VARCHAR(30),
    Precio INT ,
    Cantidad INT,
    Ubicacion VARCHAR(20),
    Categoria VARCHAR(20),
    Descripcion VARCHAR(50),
)


create table Compra (
id_compra INT PRIMARY KEY IDENTITY (1, 1),
	id_producto  int,
    Total INT ,
    CantidadProductos INT,
	FOREIGN KEY (id_compra) REFERENCES Producto(id_producto)
   
);

drop table compra

USE Carrito_de_Compras;  
GO  



USE Carrito_de_Compras;  
GO  
create PROCEDURE InsertarCompra(
	
	@id_producto int ,

    @Total int,
	@CantidadProductos int
)
AS    
   INSERT INTO Compra values (@id_producto,@Total,@CantidadProductos)
   
RETURN  

/* obtener total productos
*/
USE Carrito_de_Compras;  
GO  
create PROCEDURE ObtenerProductos
	


AS    
  Select * From Producto
   
RETURN  

EXEC ObtenerProductos
/* obtener total Compras
*/USE Carrito_de_Compras;  
GO  
create PROCEDURE ObtenerCompras
	


AS    
  Select * From Compras
   
RETURN  


/* obtener productos por id 
*/USE Carrito_de_Compras;  
GO  
create PROCEDURE ObteneProductoId
	(
	@id_producto int
	
	)


AS    
  Select * From Producto where id_producto=id_producto
   
RETURN  


/* obtener productos por Nombre 
*/USE Carrito_de_Compras;  
GO  
create PROCEDURE ObteneProductoNombre
	(
	@Nombre varchar(20)
	
	)


AS    
  Select * From Producto where Nombre=@Nombre
   
RETURN  

/* obtener productos por Categoria 
*/USE Carrito_de_Compras;  
GO  
create PROCEDURE ObteneProductoCategoria
	(
	@Categoria varchar(20)
	
	)


AS    
  Select * From Producto where Categoria=@Categoria
   
RETURN  


/* obtener productos por PrecioMayor 
*/USE Carrito_de_Compras;  
GO  
create PROCEDURE ObteneProductoPrecioMayor
	(
	@Precio int
	
	)


AS    
  Select * From Producto where Precio>=@Precio
   
RETURN  



/* obtener productos por PrecioMenor
*/USE Carrito_de_Compras;  
GO  
create PROCEDURE ObteneProductoPrecioMenor
	(
	@Precio int
	
	)


AS    
  Select * From Producto where Precio<=@Precio
   
RETURN  




