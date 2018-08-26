const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const Cliente = new Schema(
  {
      nroOper: { type: String },
      rut: { type: String},
      nombre_cliente : { type: String , lowercase: true },
      financiado: { type: String },
      tasaOp : { type: String },
      codEjecutivo : { type: String },
      nombreEjecutivo : { type: String , lowercase: true },
      sucursal: { type: String }
      
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("Cliente",Cliente);
