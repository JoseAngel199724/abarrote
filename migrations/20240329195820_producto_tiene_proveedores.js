/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('productos').then((exists) => {
        if (exists) {
            return knex.schema.hasColumn('proveedor').then(exists => {
                if (!exists) {
                    return knex.schema.table('productos', (table) => {
                        table.integer('proveedor').unsigned().references('proveedores.id_proveedor')
                    })
                }
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
