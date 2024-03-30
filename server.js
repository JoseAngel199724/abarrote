const express = require('express');
const db = require('./config')
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


// Quiero obtener la mascota del usuario 1
app.get('/api/users/:id/productos', async (req, res) => {
    try {
        const ProductoId = req.params.id;

        const response = await db
            .select(
                'mascotas.name as mascotaName', 
                'users.name as userName', 
                'mascotas.*', 
                'users.*'
            )
            .from('mascotas')
            .where({ user: userId })
            .join('users', { 'users.user_id': 'mascotas.user' })

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Tuvimos un error, intenta más tarde' });
    }
});




app.listen(3000, () => {
    console.log('Server on');
});