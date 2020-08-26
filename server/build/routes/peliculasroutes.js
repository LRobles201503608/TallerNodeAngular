"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class peliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('hola desde pelicula'));
        this.router.get('/peliculas', (req, res) => res.send('pelicula 1'));
    }
}
const peliculasroutes = new peliculasRoutes();
exports.default = peliculasroutes.router;
