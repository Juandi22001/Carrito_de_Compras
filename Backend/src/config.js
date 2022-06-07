import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 5000,
  dbUser: process.env.DB_USER || "userjd ",
  dbPassword: process.env.DB_PASSWORD || "1234",
  dbServer: process.env.DB_SERVER || "localhost",
  dbDatabase: process.env.DB_DATABASE || "Carrito_de_Compras",
};
