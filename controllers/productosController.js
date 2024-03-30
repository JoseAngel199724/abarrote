// Los corladores tien la lógica del negocio
// Solicitan la información a los modelos

const Productos = require('../models/productos');

const createProducto = (req, res) => {
    const producto = req.body;
    // Guardar en la base de datos
    Productos.create(producto)
        .then((newProducto) => {
            res.status(201).json(newProducto);
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
        });
}

const findAllProductos = async (req, res) => {
    try {
        const todosProductos = await Productos.findAll();
        res.status(200).json(todosProductos);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
}

const findOneProductos = async (req, res) => {
    try {
        const idProducto = req.params.id;
        const producto = await Productos.findOne(idProducto);
        if (producto.length === 0) {
            res.status(404).json({ message: 'Mascota no encontrada' });
        } else {
            res.status(200).json(producto[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
}

const updateProductos = async (req, res) => {
    try {
        const idProducto = req.params.id;
        const bodyToUpdate = req.body;

        const updatedProductos = await Productos.update(idProducto, bodyToUpdate);
        res.status(200).json(updatedProductos);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
}

module.exports = {
    createProducto,
    findAllProductos,
    findOneProductos,
    updateProductos
}