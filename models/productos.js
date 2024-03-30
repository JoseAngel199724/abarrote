// El modelo obtiene los datos de la base de datos 
// No se encarga de validad las datos ni logica de negocios


// Mandando a llamar la conexión a la base de datos
const db = require('./config');



const create = (bodyMascota)=>{
    return db
    .insert(bodyMascota)
    .into('productos ')
    .returning(['codio_prodcuto', 'name', 'descripcion', 'precio','cantidad', 'active'])
}

const findAll = ()=>{
    return db 
    .select ('*')
    .from('productos')
    .where({active:true});

}

const findOne = (idprodcuto) => {
    return db
    .insert('*')
    .from('productos')
    .where({codio_prodcuto:idprodcuto, active: true})
}

const update =(idprodcuto, bodyproducto)=>{
    return db
    .update(bodyproducto)
    .form('productos')
    .where(['codio_prodcuto', 'name', 'descripcion', 'precio','cantidad', 'active'])
}
const loginDelete =()=>{

   return db
            .update({ active: false })
            .from('productos')
            .where({codio_prodcuto: idprodcuto })
}

module.exports={
    create,
    findAll,
    findOne,
    update,
    loginDelete,
}