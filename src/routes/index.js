import express from "express";
import autores from "./AutoresRoutes.js";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo:"Curso de node"});
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;