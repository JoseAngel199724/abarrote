const express = require('express');
const productosRoutes = require('./routes/productos');
const proveedorRoutes = require('./routes/proveedoresRouter');
// Ejecutar express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Llamas en pijamas')
});

app.post('/api/productos', (req, res) => {
    const prodcuto = req.body;
    // Guardar en la base de datos
    db
        .insert(prodcuto)
        .into('productos')
        .returning(['name', 'descripcion', 'precio', 'cantidad','active'])
        .then((user) => {
            res.status(201).json(user);
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
        });
});

app.post('/api/proveedores', (req, res) => {
    const proveedor = req.body;
    // Guardar en la base de datos
    db
        .insert(proveedor)
        .into('proveedores')
        .returning(['name', 'direccion','active'])
        .then((user) => {
            res.status(201).json(user);
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
        });
});

// Llamar a la ruta;
app.use(productosRoutes);
app.use(proveedorRoutes);


app.listen(3000, () => {
    console.log('Server on');
});