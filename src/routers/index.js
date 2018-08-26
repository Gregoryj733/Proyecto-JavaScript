const express = require("express");
const route = express.Router();
const clienteCtrl = require("../controllers/cliente");
const frotendCtrl = require("../controllers/frontend");


route.get("/", frotendCtrl.index);


route.get("/clientes", clienteCtrl.index);
route.get("/cliente/:rut", clienteCtrl.show);
route.post("/cliente", clienteCtrl.store);
route.put("/cliente/:id" , clienteCtrl.update);
route.delete("/cliente/:id", clienteCtrl.delete);


module.exports = route;



