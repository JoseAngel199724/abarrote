/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('proveedores')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('proveedores', (table) => {
                table.increments("id_proveedor").primary();
                table.string("name").notNullable();
                table.string("direccion").notNullable();
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now());
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
