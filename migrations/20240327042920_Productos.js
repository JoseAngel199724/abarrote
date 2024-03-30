/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('productos')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('productos', (table) => {
                table.increments("codio_prodcuto").primary();
                table.string("name").notNullable();
                table.string("descripcion").notNullable();
                table.decimal("precio").notNullable();
                table.integer("cantidad").notNullable();
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
