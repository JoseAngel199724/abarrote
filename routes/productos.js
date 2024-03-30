const express = require('express');
const router = express.Router();

const ProductosController = require('../controllers/productosController');

// Ruta crear;
router.post('/api/productoss', ProductosController.createProducto);
router.get('/api/productos', ProductosController.findAllProductos);
router.get('/api/productos/:id', ProductosController.findOneProductos);
router.put('/api/productos/:id', ProductosController.updateProductos);

module.exports = router;