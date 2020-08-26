"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('hola'));
        this.router.get('/mundo', (req, res) => res.send('mundo'));
    }
}
const indexroutes = new indexRoutes();
exports.default = indexroutes.router;
