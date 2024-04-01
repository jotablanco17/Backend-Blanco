
import express from "express"
import morgan from "morgan"

import indexRouter from "./src/router/index.router.js"
import errorHandler from "./src/middlewares/errorHandler.js"
import pathHandler from "./src/middlewares/pathHandler.js"

//init
const server = express()
const port = 8080
const ready = () => console.log(`server ready in ${port}`)
server.listen(port, ready)

//middlewares
server.use(express.json())                           //manejar jsons
server.use(express.urlencoded({extended : true}))    //leer params y queries


//router   ... orden correcto
server.use("/", indexRouter)           //primero leer todas las rutas
server.use(errorHandler)               //catchear los errores de endpoints
server.use(pathHandler)                //errores de ruta
server.use(morgan("dev"))




