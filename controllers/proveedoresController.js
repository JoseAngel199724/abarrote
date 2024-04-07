const Proveedores = require('../models/proveedores');


const createProveedor = (req, res) => {
    const proveedor = req.body;
    // Guardar en la base de datos
    Proveedores.create(proveedor)
        .then((newProveedor) => {
            res.status(201).json(newProveedor);
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
        });
}

const findAllProveedor = async (req, res) => {
    try {
        const todosProveedor = await Proveedores.findAll();
        res.status(200).json(todosProveedor);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
}

const findOneProveedor = async (req, res) => {
    try {
        const idProveedor = req.params.id;
        const proveedor = await Proveedores.findOne(idProveedor);
        if (proveedor.length === 0) {
            res.status(404).json({ message: 'Mascota no encontrada' });
        } else {
            res.status(200).json(proveedor[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
}

const updateProveedor = async (req, res) => {
    try {
        const idProveedor = req.params.id;
        const bodyToUpdate = req.body;

        const updatedProveedor = await Proveedores.update(idProveedor, bodyToUpdate);
        res.status(200).json(updatedProveedor);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
}

module.exports = {
    createProveedor,
    findAllProveedor,
    findOneProveedor,
    updateProveedor
}