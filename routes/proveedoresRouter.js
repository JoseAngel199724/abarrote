const express = require('express');
const router = express.Router();

const ProveedorController = require('../controllers/proveedoresController');

// Ruta crear;
router.post('/api/proveedores/agre', ProveedorController.createProveedor);
router.get('/api/proveedores', ProveedorController.findAllProveedor);
router.get('/api/proveedores/:id', ProveedorController.findOneProveedor);
router.put('/api/proveedores/:id', ProveedorController.updateProveedor);

module.exports = router;