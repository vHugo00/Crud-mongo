const db = require('../db.js');

const Schema = db.Schema;

const aeroportoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true,
    unique: true
  }
});

const Aeroporto = db.model("Aeroporto", aeroportoSchema);

module.exports = Aeroporto;
