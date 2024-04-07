// El modelo obtiene los datos de la base de datos 
// No se encarga de validad las datos ni logica de negocios


// Mandando a llamar la conexión a la base de datos
const db = require('../config');



const create = (bodyproveedores)=>{
    return db
    .insert(bodyproveedores)
    .into('proveedores ')
    .returning(['id_proveedor', 'name', 'direccion', 'active'])
}

const findAll = ()=>{
    return db 
    .select ('*')
    .from('proveedores')
    .where({active:true});

}

const findOne = (idproveedor) => {
    return db
    .insert('*')
    .from('proveedores')
    .where({id_proveedor:idproveedor})
}

const update =(idproveedor, bodyproveedor)=>{
    return db
    .update(bodyproveedor)
    .form('proveedores')
    .where({id_proveedor: idproveedor, active: true })
    .returning(['id_proveedor', 'name', 'direccion', 'active']);
}
const loginDelete =(idproveedor)=>{

   return db
            .update({ active: false })
            .from('productos')
            .where({id_proveedor: idproveedor })
}

module.exports={
    create,
    findAll,
    findOne,
    update,
    loginDelete,
}