import express from "express";
import db from "./config/db-connect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", _ => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app