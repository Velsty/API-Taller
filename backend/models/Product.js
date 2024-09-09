const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  tipo: { type: String, enum: ['Producto', 'Servicio'], required: true },
});

module.exports = mongoose.model('Product', productSchema);
