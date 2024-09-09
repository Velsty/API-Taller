const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.createProduct = async (req, res) => {
  const { nombre, descripcion, precio, tipo } = req.body;
  try {
    const product = new Product({ nombre, descripcion, precio, tipo });
    await product.save();
    res.status(201).json({ message: 'Producto creado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};
